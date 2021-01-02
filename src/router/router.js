export default [
    { 
      path: '/',
      name: 'landing-page',    
      component: () => import("@/views/LandingPage"),
      meta:{
        title: "MediHeart. Your health in your hands"
      }
    },
    { 
      path: '/login',
      name: 'login',    
      component: () => import("@/views/Login"),
      meta:{
        title: "Login"
      }
    },
    { 
      path: '/signup',
      name: 'signup',    
      component: () => import("@/views/Signup"),
      meta:{
        title: "Signup"
      }
    },
    { 
      path: '/user/settings',
      name: 'user-settings',
      component: () => import("@/views/Settings"),
      meta: { 
        requiresAuth: true,
        title: "Settings" 
      }
    },
    { 
      path: '/user/settings/change-password',
      name: 'change-password',
      component: () => import("@/views/ChangePassword"),
      meta: { 
        requiresAuth: true,
        title: "Change password"
      }
    },
    { 
      path: '/user/personal-info',
      name: 'personal-info',    
      component: () => import("@/views/PersonalInfo"),
      meta: { 
        requiresAuth: true,
        title: "Personal info"
      }
    },
    {
      path: '/user/personal-info/modify',
      name: 'personal-info-modify',    
      component: () => import("@/views/PersonalInfoModify"),
      meta: { 
        requiresAuth: true,
        title: "Modify personal info"
      }
    },
    { 
      path: '*',
      name: 'page-not-found',    
      component: () => import("@/views/PageNotFound"),
      meta: { 
        title: "Page not found"
      } 
    }

];
  
