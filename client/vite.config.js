import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:9500",
        changeOrigin: true,
        secure: false,
      },
    },
  }, //backend server details
  // proxy specifications.
  // 1. avoid cros issues
  // cleaner api calls :
  // http://localhost:5173/api/auth ==> we have to use the whole path.
  // it looks like a call is happening from the same server.
  // to perform the rest calls
  // 1. fetch api : which is built in api call in javascript.
  // 2. axios : it is a third party library to perform api calls.==> storing the token directly for every request., manipulate the request and response.
});
/**
 * "/api": {
  target: "http://localhost:9500",
  changeOrigin: true,
  rewrite: (path) => path.replace(/^\/api/, ""), 
},
"/auth": {
  target: "http://localhost:9600",
  changeOrigin: true,
  rewrite: (path) => path.replace(/^\/auth/, ""), 
},

server: {
  proxy: {
    "/api/auth": {
      target: "http://localhost:9600",
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api\/auth/, ""), 
    },
    "/api/users": {
      target: "http://localhost:9500",
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api\/users/, ""), 
    },
    "/api/files": {
      target: "http://localhost:9700",
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api\/files/, ""), 
    },
  },
}

 */
