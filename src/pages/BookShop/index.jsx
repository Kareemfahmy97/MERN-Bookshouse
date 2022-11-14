import React from "react";
import BookList from "./BookList";
import "../../assets/css/BookShop.css";
import BreadCrumb from "../../components/Breadcrump/BreadCrumb";
import Aside from "../../components/Aside/Aside";
export default function BooksShop() {
   return (
      <div className="mb-5">
         <div className="  mx-auto">
            <div>
               <BreadCrumb title="product" breadCrumb="shop" />
            </div>
         </div>
         <div className="row container my-5 mx-auto">
            <div className="col-3 my-3   ">
               <Aside />
            </div>
            <div className="col-8 ">
               <BookList />
            </div>
         </div>
      </div>
   );
}
