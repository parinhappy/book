import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBook } from "../action";
import { Link } from "react-router-dom";
import Card from "../component/Card";

const Homepage = () => {
  // const books = useSelector((state) => state.books);
    const [books, setBooks] = useState([
      {
        title: "Flexible Rails",
        isbn: "1933988509",
        pageCount: 592,
        publishedDate: {
          $date: "2008-01-01T00:00:00.000-0800",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
        shortDescription:
          '"Flexible Rails created a standard to which I hold other technical books. You definitely get your money\'s worth."',
        longDescription:
          "Rails is a fantastic tool for web application development, but its Ajax-driven interfaces stop short of the richness you gain with a tool like Adobe Flex. Simply put, Flex is the most productive way to build the UI of rich Internet applications, and Rails is the most productive way to rapidly build a database-backed CRUD application. Together, they're an amazing combination.    Flexible Rails is a book about how to use Ruby on Rails and Adobe Flex to build next-generation rich Internet applications (RIAs). The book takes you to the leading edge of RIA development, presenting examples in Flex 3 and Rails 2.    This book is not an exhaustive Ruby on Rails tutorial, nor a Flex reference manual. (Adobe ships over 3000 pages of PDF reference documentation with Flex.) Instead, it's an extensive tutorial, developed iteratively, how to build an RIA using Flex and Rails together. You learn both the specific techniques you need to use Flex and Rails together as well as the development practices that make the combination especially powerful.    The example application built in the book is MIT-licensed, so readers can use it as the basis for their own applications. In fact, one reader has already built an agile project management tool based on the book example!    With this book, you learn Flex by osmosis. You can read the book and follow along even if you have never used Flex before. Consider it \"Flex Immersion.\" You absorb the key concepts of Flex as you go through the process of building the application.    You will also learn how Flex and Rails integrate with HTTPService and XML, and see how RESTful Rails controller design gracefully supports using the same controller actions for Flex and HTML clients. The author will show you how Cairngorm can be used to architect larger Flex applications, including tips to use Cairngorm in a less verbose way with HTTPService to talk to Rails.    Flexible Rails is for both Rails developers who are interested in Flex, and Flex developers who are interested in Rails. For a Rails developer, Flex allows for more dynamic and engaging user interfaces than are possible with Ajax. For a Flex developer, Rails provides a way to rapidly build the ORM and services layer of the application.",
        status: "PUBLISH",
        authors: ["Peter Armstrong"],
        categories: ["Web Development"],
      },
    ]);

  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(fetchAllBook());
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-5 gap-4">
      {books.map((el) => (
        <Card data={el} />
      ))}
    </div>
  );
};

export default Homepage;
