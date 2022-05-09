import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='p-5'>
            <h1 className='text-uppercase mb-5' >Question and Asnwers</h1>
            <div className='questions'>
                <h2>Difference between Javascript and node.js</h2>
                <p>Javascript is a programming language. NodeJs is a javascript Runtime. Javascript can run only browser and basically it is used for client side. Where nodeJs can be run outside of browser and it is used for Server side. With javascript we can make website and with help of nodeJs we can build Web app, Mobile app etc. </p>
            </div>
            <div className='questions'>
                <h2>When Should you use node.js and when should you use mongodb ?</h2>
                <p>Node.js is used for back-end/server-side work. I will use Node.js when I need my client side to interact with server side. And I will Mongodb when I will need a database system that  have dynamic data schema and non-relational database system. </p>
            </div>
            <div className='questions'>
                <h2>Difference between SQl and noSql database</h2>
                <p>SQL is Structured query Language. Where NoSQL is Non-Structured Query Language. SQL is a structured query based system. To work with the SQL database we need to define the structure of the data. Wher NoSQL has dynamic Schema and its also document oriented so to work with NoSQL database we dont need to define the data structure before start working.</p>
            </div>
            <div className='questions'>
                <h2>What is the purpose of JWT and how does it work ? </h2>
                <p>WT stand for JSON Web Token. The purpose of the JWT is to securely transfer information between client side and server to prevent unauthorized access of data. When any user form client side trying to access Server-side information. Server-side create a JWT token and send the token to client side. Client side will reserve the token for further use. After that when again any request send to the server-side form the client side. The client side will send the same token and server-side verify the token. If the token is valid only then the client side will get the response form the server.
                </p>
            </div>
        </div>
    );
};

export default Blog;