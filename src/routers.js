export default function (router) {
  router.map({
    '/': {
      name: 'index',
      component: function index(resolve) {
        require(['./views/components.vue'], resolve);
      },
    },
    'components': {
      component: function index(resolve) {
        require(['./views/components.vue'], resolve);
      },
      subRoutes: {
        '/alert': {
          name: 'alert',
          component: function index(resolve) {
            require(['./views/alert.vue'], resolve);
          },
        },
        '/badge': {
          name: 'badge',
          component: function index(resolve) {
            require(['./views/badge.vue'], resolve);
          },
        },
        '/card': {
          name: 'card',
          component: function index(resolve) {
            require(['./views/card.vue'], resolve);
          },
        },
        '/collapse': {
          name: 'collapse',
          component: function index(resolve) {
            require(['./views/collapse.vue'], resolve);
          },
        },
        '/dropdown': {
          name: 'dropdown',
          component: function index(resolve) {
            require(['./views/dropdown.vue'], resolve);
          },
        },
        '/button': {
          name: 'button',
          component: function index(resolve) {
            require(['./views/button.vue'], resolve);
          },
        }
      }
    },
    //404路由
		'*': {
			component: function(resolve) {
				require(['./views/components.vue'], resolve);
			}
		}
  });
  router.redirect({
	  '/':'/components/alert'
	})
}
