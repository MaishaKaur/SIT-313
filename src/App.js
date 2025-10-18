import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import SignUpPage from './routes/SignUpPage';
import SignInPage from './routes/SignInPage';
import PostPage from './routes/PostPage';
import FindQuestionPage from './routes/FindQuestionPage';
import QuestionPage from './routes/QuestionPage';
import ArticlePage from './routes/ArticlePage';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/find-question" element={<FindQuestionPage />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;