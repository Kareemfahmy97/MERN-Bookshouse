const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
   app.use(
      "/book/getall",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   app.use(
      "/book/addnewbook",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   app.use(
      "/book/remove/:id",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   app.use(
      "/book/:id",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   // app.use(
   //    "/book/updateBook/:id",
   //    createProxyMiddleware({
   //       target: "http://localhost:3001",
   //       changeOrigin: true,
   //    })
   // );

   //---------------------BOOKS REVIEWS PROXIES----------------------
   //GET ALL
   app.use(
      "/bookreview/getall",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   // ADD NEW BOOK REVIEW
   app.use(
      "/newbookreview",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   //DELETE BOOK REVIEW
   app.use(
      "/bookreview/remove/:id",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   //UPDATE BOOK REVIEW BY ID
   app.use(
      "/bookreview/updateBookReview/:id",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );

   //----------------------STRIP PACKAGES-------------------

   app.use(
      "/getallpayments/packages",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   //----------------------STRIP ORDERS-------------------

   app.use(
      "/getallpayments/orders",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );

   // --------------------GET ALL USERS------------------------
   app.use(
      "/user/getallusers",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   // --------------------GET USER------------------------
   app.use(
      "/user/getuser/:id",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   // --------------------UPADTE USER------------------------
   app.use(
      "/user/updateProfile",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   //===================================================
   //------------------------HOME-----------------------
   app.use(
      "/homeData/home",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
   //------------------------HOME PACKAGE-----------------------
   app.use(
      "/package/getall",
      createProxyMiddleware({
         target: "http://localhost:3001",
         changeOrigin: true,
      })
   );
};
