// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ItemCard from "../../components/ui/ItemCard/ItemCard";
// import { getBooks } from "../../store/reducers/bookSlice";

// export default function BookList() {
//    const dispatch = useDispatch();
//    const { books } = useSelector((state) => state.books);
//    useEffect(() => {
//       dispatch(getBooks());
//    }, [dispatch]);

//    return (
//       <div>
//          <h2 className="text-center mb-5">Book List</h2>
//          <div className="row ms-2">
//             {books.map((book) => (
//                <ItemCard key={book.id} book={book} />
//             ))}
//          </div>
//       </div>
//    );
// }