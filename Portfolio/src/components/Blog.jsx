import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <div>
      <nav id="navbarContainer" class="navbar navbar-expand-lg shadow-sm">
        <div class="container p-0">
          <a class="navbar-brand fw-bold" href="#">
            Hack Analytics
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <p class="dropdown-header">Category A</p>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Product A1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Product A2
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <p class="dropdown-header">Category B</p>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Product B1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Product B2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Product B3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              class="btn rounded-pill text-white"
              id="buttonBuy"
            >
              Buy now
            </button>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div class="container mt-5">
          <div class="row">
            <div class="col-12 col-md-6 p-0 mb-5" id="principalLeft">
              <h3 class="fs-2 mb-5 fw-semibold">
                Get insights that help your business grow.
              </h3>
              <p class="mb-5">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
              <div id="divButtons" class="">
                <div class="me-2">
                  <a
                    href="#"
                    id="buttonLeft"
                    class="rounded text-decoration-none"
                  >
                    Explore Products &rarr;
                  </a>
                </div>
                <div class="">
                  <a
                    href="#"
                    id="buttonRight"
                    class="rounded text-decoration-none"
                  >
                    Documentation &rarr;
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 p-0">
              <img
                id="imagePrincipal"
                src="images/undraw_join_re_w1lh.svg"
                alt="#"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="centralText">
        <span id="centralText-1" class="badge rounded-pill">
          New
        </span>
        <p id="centralText-2" class="fw-semibold fs-2 mb-0">
          Features
        </p>
        <p id="centralText-3" class="mb-0 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta natus
          modi hic tempora itaque molestiae est facere quidem beatae.
        </p>
      </section>

      <section class="pt-4 pb-5" id="tabContainer">
        <div class="container">
          <div class="row">
            <div id="itemsTab" class="col-12 col-sm-6 col-md-4 text-center">
              <p class="fs-5 fw-semibold m-0 pb-2">Invite team members</p>
              <img
                id="imagesTab"
                src="images/undraw_good_team_re_hrvm.svg"
                alt="#"
              />
              <p id="descriptionTab" class="mb-0 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div id="itemsTab" class="col-12 col-sm-6 col-md-4 text-center">
              <p class="fs-5 fw-semibold m-0 pb-2">Reporting</p>
              <img
                id="imagesTab"
                src="images/undraw_innovative_re_rr5i.svg"
                alt="#"
              />
              <p id="descriptionTab" class="mb-0 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div id="itemsTab" class="col-12 col-sm-6 col-md-4 text-center">
              <p class="fs-5 fw-semibold m-0 pb-2">Dashboard</p>
              <img
                id="imagesTab"
                src="images/undraw_learning_re_32qv.svg"
                alt="#"
              />
              <p id="descriptionTab" class="mb-0 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div id="itemsTab" class="col-12 col-sm-6 col-md-4 text-center">
              <p class="fs-5 fw-semibold m-0 pb-2">Team Collaboration</p>
              <img
                id="imagesTab"
                src="images/undraw_online_stats_0g94.svg"
                alt="#"
              />
              <p id="descriptionTab" class="mb-0 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div id="itemsTab" class="col-12 col-sm-6 col-md-4 text-center">
              <p class="fs-5 fw-semibold m-0 pb-2">Statistics</p>
              <img
                id="imagesTab"
                src="images/undraw_professor_re_mj1s.svg"
                alt="#"
              />
              <p id="descriptionTab" class="mb-0 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div id="itemsTab" class="col-12 col-sm-6 col-md-4 text-center">
              <p class="fs-5 fw-semibold m-0 pb-2">Project Management</p>
              <img
                id="imagesTab"
                src="images/undraw_working_remotely_re_6b3a.svg"
                alt="#"
              />
              <p id="descriptionTab" class="mb-0 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="postBlogsSection">
        <div class="container text-center">
          <p class="fs-3 fw-semibold">From the blog</p>
          <p id="descriptionBlogSection">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit aperiam soluta aliquid.
          </p>
        </div>
        <div class="container p-0">
          <div class="row d-flex">
            <div id="postBlogsCols" class="col-12 col-sm-6 col-md-4">
              <div class="card-flex-fill border border-dark-subtle rounded bg-white shadow">
                <div id="divImagePosts">
                  <img
                    src="images/olena-sergienko-dIMJWLx1YbE-unsplash.jpg"
                    alt=""
                    class="img-fluid"
                    id="imagePosts"
                  />
                </div>
                <div class="container">
                  <p class="fs-5 fw-semibold m-0 mb-2 mt-2">
                    Boost your conversion rate
                  </p>
                  <p class="m-0 mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Neque corrupti deserunts laudantium quod?.pariatur eius ex
                    facere voluptates laudantium quod?.
                  </p>
                </div>
                <div
                  class="p-2 border-top border-dark-subtle"
                  id="itemsProfilePosts"
                >
                  <img
                    src="images/sigmund-a19OVaa2rzA-unsplash.jpg"
                    alt=""
                    id="imageProfilePosts"
                    class="rounded-circle img-fluid"
                  />
                  <div>
                    <p class="m-0 fw-semibold">José López</p>
                    <p id="timeDescription" class="m-0">
                      Mar 16, 2020 &sdot; 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="postBlogsCols" class="col-12 col-sm-6 col-md-4">
              <div class="card-flex-fill border border-dark-subtle rounded bg-white shadow">
                <div id="divImagePosts">
                  <img
                    src="images/ian-dooley-DJ7bWa-Gwks-unsplash.jpg"
                    alt=""
                    class="img-fluid"
                    id="imagePosts"
                  />
                </div>
                <div class="container">
                  <p class="fs-5 fw-semibold m-0 mb-2 mt-2">
                    How to search engine optimization to drive sales
                  </p>
                  <p class="m-0 mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Neque corrupti deserunt illo, dignissimos, accusamus, iure
                    culpa pariatur eius ex facere voluptates laudantium
                    quod?.pariatur eius ex facere voluptates laudantium quod?.
                  </p>
                </div>
                <div
                  class="p-2 border-top border-dark-subtle"
                  id="itemsProfilePosts"
                >
                  <img
                    src="images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
                    alt=""
                    id="imageProfilePosts"
                    class="rounded-circle img-fluid"
                  />
                  <div>
                    <p class="m-0 fw-semibold">María Pérez</p>
                    <p id="timeDescription" class="m-0">
                      Mar 16, 2020 &sdot; 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="postBlogsCols" class="col-12 col-sm-6 col-md-4">
              <div class="card-flex-fill border border-dark-subtle rounded bg-white shadow">
                <div id="divImagePosts">
                  <img
                    src="images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
                    alt=""
                    class="img-fluid"
                    id="imagePosts"
                  />
                </div>
                <div class="container">
                  <p class="fs-5 fw-semibold m-0 mb-2 mt-2">
                    Improve your customer experience
                  </p>
                  <p class="m-0 mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Neque corrupti deserunt illo.
                  </p>
                </div>
                <div
                  class="p-2 border-top border-dark-subtle"
                  id="itemsProfilePosts"
                >
                  <img
                    src="images/sigmund-jzz_3jWMzHA-unsplash.jpg"
                    alt=""
                    id="imageProfilePosts"
                    class="rounded-circle img-fluid"
                  />
                  <div>
                    <p class="m-0 fw-semibold">Victoria González</p>
                    <p id="timeDescription" class="m-0">
                      Mar 16, 2020 &sdot; 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsSection">
        <div class="container">
          <div class="row shadow rounded bg-white">
            <div class="col-12 p-4 col-sm-6">
              <p class="mb-0 fw-semibold fs-5">Get the latest news</p>
              <p class="mb-0 text-secondary">
                Stay in the loop with the latest stories and breaking headlines!
              </p>
            </div>
            <div class="d-flex justify-content-center flex-column col-12 p-4 col-sm-6">
              <form id="inputContainer" class="d-flex rounded" role="search">
                <input
                  id="inputText"
                  class="border-1 border-dark-subtle rounded-start ps-2"
                  type="email"
                  placeholder="Ej: maria.perez@gmail.com"
                  aria-label="Search"
                />
                <button id="mailButton" class="border-0 text-white rounded-end">
                  Button
                </button>
              </form>
              <p id="descriptionImput" class="mb-0 text-secondary">
                You can unsuscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="footer" class="bg-black">
        <div class="container">
          <div class="row">
            <div class="d-flex mt-5 justify-content-between p-0">
              <div class="col-3">
                <h4 id="ts" class="text-white pb-4">
                  Hack Analytics
                </h4>
                <img
                  id="socialMediaImg"
                  class="img-fluid"
                  src="images/instagram.png"
                  alt="ig"
                />
                <img
                  id="socialMediaImg"
                  class="img-fluid"
                  src="images/facebook.png"
                  alt="fb"
                />
                <img
                  id="socialMediaImg"
                  class="img-fluid"
                  src="images/github.png"
                  alt="gh"
                />
                <img
                  id="socialMediaImg"
                  class="img-fluid"
                  src="images/gorjeo.png"
                  alt="tw"
                />
              </div>
              <div class="col-2 text">
                <h4 id="ts" class="pb-4 text-white">
                  Solutions
                </h4>
                <h4 id="ts" class="text-secondary">
                  Marketing
                </h4>
                <h4 id="ts" class="text-secondary">
                  Analytics
                </h4>
                <h4 id="ts" class="text-secondary">
                  Commerce
                </h4>
                <h4 id="ts" class="text-secondary">
                  Insights
                </h4>
              </div>
              <div class="support col-2">
                <h4 id="ts" class="pb-4 text-white">
                  Support
                </h4>
                <h4 id="ts" class="text-secondary">
                  Pircing
                </h4>
                <h4 id="ts" class="text-secondary">
                  Documentation
                </h4>
                <h4 id="ts" class="text-secondary">
                  Guides
                </h4>
                <h4 id="ts" class="text-secondary">
                  API Status
                </h4>
              </div>
              <div class="company col-2">
                <h4 id="ts" class="pb-4 text-white">
                  Company
                </h4>
                <h4 id="ts" class="text-secondary">
                  About
                </h4>
                <h4 id="ts" class="text-secondary">
                  Blog
                </h4>
                <h4 id="ts" class="text-secondary">
                  Jobs
                </h4>
                <h4 id="ts" class="text-secondary">
                  Press
                </h4>
                <h4 id="ts" class="text-secondary">
                  Partners
                </h4>
              </div>
              <div class="col-2">
                <h4 id="ts" class="pb-4 text-white">
                  Legal
                </h4>
                <h4 id="ts" class="text-secondary">
                  Privacy policy
                </h4>
                <h4 id="ts" class="text-secondary">
                  Terms and Conditions
                </h4>
                <h4 id="ts" class="text-secondary">
                  License
                </h4>
              </div>
            </div>
            <div class="d-flex p-0">
              <div
                id="footerBootom"
                class="d-flex justify-content-between mt-5"
              >
                <h5 id="ts" class="text-start text-secondary">
                  Copyright © Hack Analytics 2022
                </h5>
                <h5 id="ts" class="text-secondary justify-content-end">
                  Privacy Policy • Terms & Conditions
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
