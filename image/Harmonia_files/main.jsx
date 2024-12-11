import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5303c823"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5303c823"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=5303c823"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "/node_modules/.vite/deps/react-router-dom.js?v=5303c823";
import Inscription, { action as registerAction } from "/src/pages/Inscription.jsx";
import ListeRecettes from "/src/pages/ListeRecettes.jsx";
import ConsulterRecette from "/src/pages/ConsulterRecette.jsx";
import App, { loader as appLoader } from "/src/App.jsx";
import Login, { action as loginAction } from "/src/pages/Login.jsx";
import Accueil from "/src/pages/Accueil.jsx";
import Profile from "/src/pages/Profile.jsx";
import RecettesFavorites from "/src/pages/RecettesFavorites.jsx";
import NutriAutoComplete from "/src/components/NutriAutoComplete.jsx";
import RecettesAjoutees from "/src/pages/RecettesAjoutees.jsx";
import AjouterRecette, {
  action as ajouterRecetteAction
} from "/src/pages/AjouterRecette.jsx";
import { fetchUserById } from "/src/api/fetch.js";
import Admin from "/src/components/Admin.jsx";
import GestionRecettes, {
  loader as gestionRecettesLoader
} from "/src/pages/admin/GestionRecettes.jsx";
import GestionUtilisateur, {
  loader as gestionUsersLoader
} from "/src/pages/admin/GestionUtilisateur.jsx";
import { checkAuth } from "/src/api/api.js";
function protectedRoute(routeConfig) {
  return {
    ...routeConfig,
    loader: async (args) => {
      const isAllowed = await checkAuth();
      if (!isAllowed) {
        return redirect("/connexion");
      }
      if (routeConfig.loader) {
        return routeConfig.loader(args);
      }
      return null;
    }
  };
}
const router = createBrowserRouter(
  [
    {
      element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
        fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
        lineNumber: 54,
        columnNumber: 12
      }, this),
      loader: appLoader,
      children: [
        {
          path: "/inscription",
          element: /* @__PURE__ */ jsxDEV(Inscription, {}, void 0, false, {
            fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
            lineNumber: 59,
            columnNumber: 14
          }, this),
          action: registerAction
        },
        {
          path: "/",
          element: /* @__PURE__ */ jsxDEV(Accueil, {}, void 0, false, {
            fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
            lineNumber: 64,
            columnNumber: 14
          }, this)
        },
        {
          path: "/recettes",
          element: /* @__PURE__ */ jsxDEV(ListeRecettes, {}, void 0, false, {
            fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
            lineNumber: 68,
            columnNumber: 14
          }, this)
        },
        { path: "/connexion", element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
          fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
          lineNumber: 70,
          columnNumber: 34
        }, this), action: loginAction },
        {
          path: "/recettes/:id",
          element: /* @__PURE__ */ jsxDEV(ConsulterRecette, {}, void 0, false, {
            fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
            lineNumber: 73,
            columnNumber: 14
          }, this)
        },
        {
          path: "/profile/:id",
          element: /* @__PURE__ */ jsxDEV(Profile, {}, void 0, false, {
            fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
            lineNumber: 77,
            columnNumber: 14
          }, this),
          loader: ({ params }) => fetchUserById(params.id)
        },
        protectedRoute({
          path: "/RecettesFavorites",
          element: /* @__PURE__ */ jsxDEV(RecettesFavorites, {}, void 0, false, {
            fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
            lineNumber: 82,
            columnNumber: 14
          }, this)
        }),
        {
          path: "/NutriAutoComplete",
          element: /* @__PURE__ */ jsxDEV(NutriAutoComplete, {}, void 0, false, {
            fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
            lineNumber: 86,
            columnNumber: 14
          }, this)
        },
        { path: "/dernieres-recettes", element: /* @__PURE__ */ jsxDEV(RecettesAjoutees, {}, void 0, false, {
          fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
          lineNumber: 88,
          columnNumber: 43
        }, this) },
        protectedRoute({
          path: "/RecettesAjoutees",
          element: /* @__PURE__ */ jsxDEV(AjouterRecette, {}, void 0, false, {
            fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
            lineNumber: 91,
            columnNumber: 14
          }, this),
          action: ajouterRecetteAction
        }),
        { path: "/dernieres-recettes", element: /* @__PURE__ */ jsxDEV(RecettesAjoutees, {}, void 0, false, {
          fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
          lineNumber: 94,
          columnNumber: 43
        }, this) },
        protectedRoute({
          path: "/admin",
          element: /* @__PURE__ */ jsxDEV(Admin, {}, void 0, false, {
            fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
            lineNumber: 97,
            columnNumber: 14
          }, this),
          children: [
            {
              index: true,
              element: /* @__PURE__ */ jsxDEV(GestionRecettes, {}, void 0, false, {
                fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
                lineNumber: 101,
                columnNumber: 16
              }, this),
              loader: gestionRecettesLoader
            },
            {
              path: "GestionUtilisateurs",
              element: /* @__PURE__ */ jsxDEV(GestionUtilisateur, {}, void 0, false, {
                fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
                lineNumber: 106,
                columnNumber: 16
              }, this),
              loader: gestionUsersLoader
            }
          ]
        })
      ]
    }
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
    lineNumber: 119,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/jeanrene/js-valence-p3-eating-nam-nam/client/src/main.jsx",
    lineNumber: 118,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,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STtBQUFBLFFBQzdETCxlQUFlO0FBQUEsVUFDYk8sTUFBTTtBQUFBLFVBQ05GLFNBQVMsdUJBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZTtBQUFBLFVBQ3hCNUIsUUFBUWU7QUFBQUEsUUFDVixDQUFDO0FBQUEsUUFDRCxFQUFFZSxNQUFNLHVCQUF1QkYsU0FBUyx1QkFBQyxzQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlCLEVBQUk7QUFBQSxRQUM3REwsZUFBZTtBQUFBLFVBQ2JPLE1BQU07QUFBQSxVQUNORixTQUFTLHVCQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTTtBQUFBLFVBQ2ZDLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRUksT0FBTztBQUFBLGNBQ1BMLFNBQVMsdUJBQUMscUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0I7QUFBQSxjQUN6QnZCLFFBQVFjO0FBQUFBLFlBQ1Y7QUFBQSxZQUNBO0FBQUEsY0FDRVcsTUFBTTtBQUFBLGNBQ05GLFNBQVMsdUJBQUMsd0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbUI7QUFBQSxjQUM1QnZCLFFBQVFnQjtBQUFBQSxZQUNWO0FBQUEsVUFBQztBQUFBLFFBRUwsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUVOO0FBQUEsRUFBQztBQUNGO0FBRUQsTUFBTWEsT0FBT3ZDLFNBQVN3QyxXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBQztBQUVoRUgsS0FBS0k7QUFBQUEsRUFDSCx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCLEtBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUNGIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsInJlZGlyZWN0IiwiSW5zY3JpcHRpb24iLCJhY3Rpb24iLCJyZWdpc3RlckFjdGlvbiIsIkxpc3RlUmVjZXR0ZXMiLCJDb25zdWx0ZXJSZWNldHRlIiwiQXBwIiwibG9hZGVyIiwiYXBwTG9hZGVyIiwiTG9naW4iLCJsb2dpbkFjdGlvbiIsIkFjY3VlaWwiLCJQcm9maWxlIiwiUmVjZXR0ZXNGYXZvcml0ZXMiLCJOdXRyaUF1dG9Db21wbGV0ZSIsIlJlY2V0dGVzQWpvdXRlZXMiLCJBam91dGVyUmVjZXR0ZSIsImFqb3V0ZXJSZWNldHRlQWN0aW9uIiwiZmV0Y2hVc2VyQnlJZCIsIkFkbWluIiwiR2VzdGlvblJlY2V0dGVzIiwiZ2VzdGlvblJlY2V0dGVzTG9hZGVyIiwiR2VzdGlvblV0aWxpc2F0ZXVyIiwiZ2VzdGlvblVzZXJzTG9hZGVyIiwiY2hlY2tBdXRoIiwicHJvdGVjdGVkUm91dGUiLCJyb3V0ZUNvbmZpZyIsImFyZ3MiLCJpc0FsbG93ZWQiLCJyb3V0ZXIiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJwYXRoIiwicGFyYW1zIiwiaWQiLCJpbmRleCIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUJyb3dzZXJSb3V0ZXIsXG4gIFJvdXRlclByb3ZpZGVyLFxuICByZWRpcmVjdCxcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBJbnNjcmlwdGlvbiwgeyBhY3Rpb24gYXMgcmVnaXN0ZXJBY3Rpb24gfSBmcm9tIFwiLi9wYWdlcy9JbnNjcmlwdGlvblwiO1xuaW1wb3J0IExpc3RlUmVjZXR0ZXMgZnJvbSBcIi4vcGFnZXMvTGlzdGVSZWNldHRlc1wiO1xuaW1wb3J0IENvbnN1bHRlclJlY2V0dGUgZnJvbSBcIi4vcGFnZXMvQ29uc3VsdGVyUmVjZXR0ZVwiO1xuaW1wb3J0IEFwcCwgeyBsb2FkZXIgYXMgYXBwTG9hZGVyIH0gZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgTG9naW4sIHsgYWN0aW9uIGFzIGxvZ2luQWN0aW9uIH0gZnJvbSBcIi4vcGFnZXMvTG9naW5cIjtcbmltcG9ydCBBY2N1ZWlsIGZyb20gXCIuL3BhZ2VzL0FjY3VlaWxcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL3BhZ2VzL1Byb2ZpbGVcIjtcbmltcG9ydCBSZWNldHRlc0Zhdm9yaXRlcyBmcm9tIFwiLi9wYWdlcy9SZWNldHRlc0Zhdm9yaXRlc1wiO1xuaW1wb3J0IE51dHJpQXV0b0NvbXBsZXRlIGZyb20gXCIuL2NvbXBvbmVudHMvTnV0cmlBdXRvQ29tcGxldGVcIjtcblxuaW1wb3J0IFJlY2V0dGVzQWpvdXRlZXMgZnJvbSBcIi4vcGFnZXMvUmVjZXR0ZXNBam91dGVlc1wiO1xuaW1wb3J0IEFqb3V0ZXJSZWNldHRlLCB7XG4gIGFjdGlvbiBhcyBham91dGVyUmVjZXR0ZUFjdGlvbixcbn0gZnJvbSBcIi4vcGFnZXMvQWpvdXRlclJlY2V0dGVcIjtcblxuaW1wb3J0IHsgZmV0Y2hVc2VyQnlJZCB9IGZyb20gXCIuL2FwaS9mZXRjaFwiO1xuaW1wb3J0IEFkbWluIGZyb20gXCIuL2NvbXBvbmVudHMvQWRtaW5cIjtcbmltcG9ydCBHZXN0aW9uUmVjZXR0ZXMsIHtcbiAgbG9hZGVyIGFzIGdlc3Rpb25SZWNldHRlc0xvYWRlcixcbn0gZnJvbSBcIi4vcGFnZXMvYWRtaW4vR2VzdGlvblJlY2V0dGVzXCI7XG5pbXBvcnQgR2VzdGlvblV0aWxpc2F0ZXVyLCB7XG4gIGxvYWRlciBhcyBnZXN0aW9uVXNlcnNMb2FkZXIsXG59IGZyb20gXCIuL3BhZ2VzL2FkbWluL0dlc3Rpb25VdGlsaXNhdGV1clwiO1xuaW1wb3J0IHsgY2hlY2tBdXRoIH0gZnJvbSBcIi4vYXBpL2FwaVwiO1xuXG5mdW5jdGlvbiBwcm90ZWN0ZWRSb3V0ZShyb3V0ZUNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIC4uLnJvdXRlQ29uZmlnLFxuICAgIGxvYWRlcjogYXN5bmMgKGFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGlzQWxsb3dlZCA9IGF3YWl0IGNoZWNrQXV0aCgpO1xuXG4gICAgICBpZiAoIWlzQWxsb3dlZCkge1xuICAgICAgICByZXR1cm4gcmVkaXJlY3QoXCIvY29ubmV4aW9uXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocm91dGVDb25maWcubG9hZGVyKSB7XG4gICAgICAgIHJldHVybiByb3V0ZUNvbmZpZy5sb2FkZXIoYXJncyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsOyAvLyBFeHBsaWNpdGx5IHJldHVybiBudWxsIGlmIG5vIGxvYWRlciBkYXRhXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBlbGVtZW50OiA8QXBwIC8+LFxuICAgIGxvYWRlcjogYXBwTG9hZGVyLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2luc2NyaXB0aW9uXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxJbnNjcmlwdGlvbiAvPixcbiAgICAgICAgYWN0aW9uOiByZWdpc3RlckFjdGlvbixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBlbGVtZW50OiA8QWNjdWVpbCAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3JlY2V0dGVzXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxMaXN0ZVJlY2V0dGVzIC8+LFxuICAgICAgfSxcbiAgICAgIHsgcGF0aDogXCIvY29ubmV4aW9uXCIsIGVsZW1lbnQ6IDxMb2dpbiAvPiwgYWN0aW9uOiBsb2dpbkFjdGlvbiB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9yZWNldHRlcy86aWRcIixcbiAgICAgICAgZWxlbWVudDogPENvbnN1bHRlclJlY2V0dGUgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9wcm9maWxlLzppZFwiLFxuICAgICAgICBlbGVtZW50OiA8UHJvZmlsZSAvPixcbiAgICAgICAgbG9hZGVyOiAoeyBwYXJhbXMgfSkgPT4gZmV0Y2hVc2VyQnlJZChwYXJhbXMuaWQpLFxuICAgICAgfSxcbiAgICAgIHByb3RlY3RlZFJvdXRlKHtcbiAgICAgICAgcGF0aDogXCIvUmVjZXR0ZXNGYXZvcml0ZXNcIixcbiAgICAgICAgZWxlbWVudDogPFJlY2V0dGVzRmF2b3JpdGVzIC8+LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL051dHJpQXV0b0NvbXBsZXRlXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxOdXRyaUF1dG9Db21wbGV0ZSAvPixcbiAgICAgIH0sXG4gICAgICB7IHBhdGg6IFwiL2Rlcm5pZXJlcy1yZWNldHRlc1wiLCBlbGVtZW50OiA8UmVjZXR0ZXNBam91dGVlcyAvPiB9LFxuICAgICAgcHJvdGVjdGVkUm91dGUoe1xuICAgICAgICBwYXRoOiBcIi9SZWNldHRlc0Fqb3V0ZWVzXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxBam91dGVyUmVjZXR0ZSAvPixcbiAgICAgICAgYWN0aW9uOiBham91dGVyUmVjZXR0ZUFjdGlvbixcbiAgICAgIH0pLFxuICAgICAgeyBwYXRoOiBcIi9kZXJuaWVyZXMtcmVjZXR0ZXNcIiwgZWxlbWVudDogPFJlY2V0dGVzQWpvdXRlZXMgLz4gfSxcbiAgICAgIHByb3RlY3RlZFJvdXRlKHtcbiAgICAgICAgcGF0aDogXCIvYWRtaW5cIixcbiAgICAgICAgZWxlbWVudDogPEFkbWluIC8+LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgICAgICAgZWxlbWVudDogPEdlc3Rpb25SZWNldHRlcyAvPixcbiAgICAgICAgICAgIGxvYWRlcjogZ2VzdGlvblJlY2V0dGVzTG9hZGVyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCJHZXN0aW9uVXRpbGlzYXRldXJzXCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8R2VzdGlvblV0aWxpc2F0ZXVyIC8+LFxuICAgICAgICAgICAgbG9hZGVyOiBnZXN0aW9uVXNlcnNMb2FkZXIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0sXG5dKTtcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcblxucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiJdLCJmaWxlIjoiL2hvbWUvamVhbnJlbmUvanMtdmFsZW5jZS1wMy1lYXRpbmctbmFtLW5hbS9jbGllbnQvc3JjL21haW4uanN4In0=