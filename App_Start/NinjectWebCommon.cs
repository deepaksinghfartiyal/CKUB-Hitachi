[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(UBuilder.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(UBuilder.App_Start.NinjectWebCommon), "Stop")]

namespace UBuilder.App_Start
{
    using System;
    using System.Web;

    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Ninject;
    using Ninject.Web.Common;
    using UBuilder.Domain.Repository;
    using UBuilder.Domain.EntityRepository;
    using System.Web.Mvc;
    using System.Web.Routing;
    using System.Collections.Generic;
    using Ninject.Web.Common.WebHost;

    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));

            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                ControllerBuilder.Current.SetControllerFactory(new NinjectControllerFactory(kernel));

                RegisterServices(kernel);

                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<IUnitOfWork>().To<UnitOfWork>().InRequestScope();
            kernel.Bind<IDatabaseFactory>().To<DatabaseFactory>().InRequestScope();

            kernel.Bind<IDesignsRepository>().To<DesignsRepository>().InRequestScope();

            // mab
            kernel.Bind<IDealersRepository>().To<DealersRepository>().InRequestScope();

            kernel.Bind<IPricingRepository>().To<PricingRepository>().InRequestScope();
        }        
    }

    public class NinjectActionInvoker : ControllerActionInvoker
    {
        private readonly IKernel _kernel;

        public NinjectActionInvoker(IKernel kernel)
        {
            _kernel = kernel;
        }

        protected override ActionExecutedContext InvokeActionMethodWithFilters(
            ControllerContext controllerContext,
            IList<IActionFilter> filters,
            ActionDescriptor actionDescriptor,
            IDictionary<string, object> parameters)
        {
            foreach (IActionFilter actionFilter in filters)
            {
                _kernel.Inject(actionFilter);
            }
            return base.InvokeActionMethodWithFilters(
                controllerContext, filters, actionDescriptor, parameters);
        }
    }

    public class NinjectControllerFactory : DefaultControllerFactory
    {
        private IKernel ninjectKernel;
        public NinjectControllerFactory(IKernel kernel)
        {
            ninjectKernel = kernel;
        }
        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {
            return (controllerType == null) ? null : (IController)ninjectKernel.Get(controllerType);
        }

        /// <summary>
        /// Creates the controller with the specified name.
        /// </summary>
        /// <param name="requestContext">The request context.</param>
        /// <param name="controllerName">Name of the controller.</param>
        /// <returns>The created controller.</returns>
        public override IController CreateController(RequestContext requestContext, string controllerName)
        {
            var controller = ninjectKernel.TryGet<IController>(controllerName.ToLowerInvariant());

            // Try to find controller
            if (controller == null)
                controller = base.CreateController(requestContext, controllerName);
            if (controller != null)
                return controller;


            var standardController = controller as Controller;

            if (standardController != null)
                standardController.ActionInvoker = new NinjectActionInvoker(ninjectKernel);
            else
                throw new HttpException(404, string.Format("The controller for path '{0}' was not found.", requestContext.HttpContext.Request.Path));

            return controller;
        }

        /// <summary>
        /// Releases the specified controller.
        /// </summary>
        /// <param name="controller">The controller to release.</param>
        public override void ReleaseController(IController controller) { }
    }
}
