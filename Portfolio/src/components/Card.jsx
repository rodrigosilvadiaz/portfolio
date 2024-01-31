import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="">
      <Link id="card" to="https://gamehub-frontend.vercel.app/">
        <div class="card">
          <div class="background-image"></div>
          <div class="content">
            <h5>GameHub</h5>
            <br />
            <p>Demo: E-commerce de videojuegos </p>
            <br />
            <p>Frontend - Backend</p>
            <div class="icons">
              <ul class="card-social">
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#242938" rx="60" />
                      <path
                        fill="#00D8FF"
                        d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656c0-10.303-8.352-18.656-18.656-18.656c-10.303 0-18.656 8.353-18.656 18.656c0 10.303 8.353 18.656 18.656 18.656"
                      />
                      <path
                        stroke="#00D8FF"
                        strokeWidth="8.911"
                        d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
                        clipRule="evenodd"
                      />
                      <path
                        stroke="#00D8FF"
                        strokeWidth="8.911"
                        d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
                        clipRule="evenodd"
                      />
                      <path
                        stroke="#00D8FF"
                        strokeWidth="8.911"
                        d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                  <span>React</span>
                </li>
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#242938" rx="60" />
                      <path
                        fill="#81CD39"
                        d="M119.878 31.116c4.919-2.815 11.325-2.828 16.239 0c24.722 13.97 49.452 27.917 74.17 41.895c4.65 2.619 7.759 7.793 7.712 13.15v84.045c.035 5.579-3.382 10.877-8.287 13.436c-24.641 13.893-49.27 27.802-73.907 41.695c-5.019 2.87-11.554 2.649-16.418-.457c-7.387-4.282-14.787-8.544-22.175-12.822c-1.51-.9-3.212-1.616-4.278-3.08c.943-1.27 2.628-1.428 3.997-1.983c3.083-.981 5.916-2.555 8.748-4.082c.717-.49 1.591-.302 2.278.136c6.317 3.622 12.579 7.35 18.917 10.937c1.352.781 2.721-.256 3.877-.9c24.18-13.667 48.39-27.281 72.567-40.952c.896-.431 1.391-1.382 1.318-2.363c.017-27.725.004-55.454.009-83.18c.102-1.112-.542-2.136-1.549-2.592c-24.555-13.829-49.099-27.678-73.65-41.51a2.557 2.557 0 0 0-2.892-.005c-24.552 13.837-49.09 27.7-73.642 41.527c-1.003.457-1.676 1.464-1.557 2.58c.005 27.726 0 55.455 0 83.184a2.352 2.352 0 0 0 1.336 2.334c6.551 3.715 13.111 7.404 19.667 11.107c3.694 1.987 8.228 3.169 12.298 1.646c3.59-1.288 6.107-4.953 6.039-8.765c.034-27.563-.017-55.13.025-82.69c-.09-1.223 1.071-2.234 2.261-2.118c3.148-.022 6.3-.043 9.448.008c1.314-.03 2.218 1.288 2.056 2.52c-.013 27.738.034 55.476-.021 83.213c.008 7.393-3.029 15.437-9.867 19.054c-8.423 4.363-18.835 3.438-27.157-.746c-7.204-3.596-14.08-7.84-21.156-11.692c-4.918-2.545-8.318-7.864-8.283-13.439V86.161c-.052-5.468 3.182-10.736 7.975-13.317c24.637-13.903 49.27-27.818 73.902-41.728"
                      />
                      <path
                        fill="#81CD39"
                        d="M141.372 89.335c10.745-.692 22.248-.41 31.917 4.884c7.487 4.056 11.637 12.57 11.769 20.887c-.209 1.121-1.382 1.74-2.453 1.663c-3.117-.004-6.236.043-9.353-.021c-1.323.051-2.091-1.168-2.257-2.337c-.896-3.98-3.067-7.921-6.812-9.841c-5.75-2.878-12.416-2.733-18.686-2.673c-4.577.242-9.499.639-13.377 3.33c-2.977 2.039-3.881 6.155-2.819 9.47c1.002 2.38 3.749 3.148 5.998 3.856c12.949 3.387 26.671 3.049 39.373 7.506c5.259 1.817 10.403 5.35 12.203 10.856c2.355 7.38 1.323 16.2-3.928 22.124c-4.258 4.875-10.459 7.529-16.644 8.97c-8.228 1.835-16.767 1.882-25.123 1.067c-7.857-.896-16.034-2.96-22.099-8.313c-5.187-4.504-7.72-11.522-7.469-18.294c.06-1.144 1.199-1.942 2.295-1.848c3.139-.025 6.279-.034 9.418.005c1.255-.09 2.184.994 2.249 2.176c.578 3.791 2.003 7.771 5.31 10.018c6.38 4.117 14.387 3.835 21.693 3.95c6.053-.268 12.848-.349 17.787-4.35c2.606-2.282 3.378-6.1 2.674-9.384c-.763-2.773-3.664-4.065-6.155-4.91c-12.783-4.043-26.659-2.576-39.318-7.149c-5.14-1.816-10.11-5.25-12.084-10.53c-2.755-7.473-1.493-16.717 4.308-22.44c5.656-5.695 13.82-7.888 21.583-8.672"
                      />
                    </g>
                  </svg>
                  <span>NodeJS</span>
                </li>
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#023430" rx="60" />
                      <path
                        fill="#10AA50"
                        d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
                      />
                      <path
                        fill="#B8C4C2"
                        d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"
                      />
                      <path
                        fill="#12924F"
                        d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"
                      />
                    </g>
                  </svg>
                  <span>Mongo db</span>
                </li>
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                  >
                    <defs>
                      <linearGradient
                        id="IconifyId18d483ce66b1cad563"
                        x1="76.079"
                        x2="523.48"
                        y1="10.798"
                        y2="365.95"
                        gradientTransform="translate(1.11 14.613)scale(.24566)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#9013fe" />
                        <stop offset="1" stopColor="#6610f2" />
                      </linearGradient>
                      <linearGradient
                        id="IconifyId18d483ce66b1cad564"
                        x1="193.51"
                        x2="293.51"
                        y1="109.74"
                        y2="278.87"
                        gradientTransform="translate(0 52)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#f1e5fc" />
                      </linearGradient>
                      <filter
                        id="IconifyId18d483ce66b1cad565"
                        width="197"
                        height="249"
                        x="161.9"
                        y="135.46"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="8" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                      </filter>
                    </defs>
                    <path
                      fill="url(#IconifyId18d483ce66b1cad563)"
                      d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"
                    />
                    <path
                      fill="url(#IconifyId18d483ce66b1cad564)"
                      d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z"
                      filter="url(#IconifyId18d483ce66b1cad565)"
                      transform="translate(1.494 2.203)scale(.24566)"
                    />
                  </svg>
                  <span>Boostrap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>

      <Link id="card" to="https://gamehub-frontend.vercel.app/">
        <div class="card">
          <div class="background_image_otlas"></div>
          <div class="content">
            <h5>Otlas</h5>
            <br />
            <p>Website: Empresa de arquitectura y construcción</p>
            <br />
            <p>Frontend</p>
            <div class="icons">
              <ul class="card-social">
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#242938" rx="60" />
                      <path
                        fill="#00D8FF"
                        d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656c0-10.303-8.352-18.656-18.656-18.656c-10.303 0-18.656 8.353-18.656 18.656c0 10.303 8.353 18.656 18.656 18.656"
                      />
                      <path
                        stroke="#00D8FF"
                        strokeWidth="8.911"
                        d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
                        clipRule="evenodd"
                      />
                      <path
                        stroke="#00D8FF"
                        strokeWidth="8.911"
                        d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
                        clipRule="evenodd"
                      />
                      <path
                        stroke="#00D8FF"
                        strokeWidth="8.911"
                        d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                  <span>React</span>
                </li>
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#0277BD" rx="60" />
                      <path
                        fill="#EBEBEB"
                        d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"
                      />
                      <path
                        fill="#fff"
                        d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"
                      />
                    </g>
                  </svg>
                  <span>Css</span>
                </li>
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                  >
                    <defs>
                      <linearGradient
                        id="IconifyId18d483ce66b1cad563"
                        x1="76.079"
                        x2="523.48"
                        y1="10.798"
                        y2="365.95"
                        gradientTransform="translate(1.11 14.613)scale(.24566)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#9013fe" />
                        <stop offset="1" stopColor="#6610f2" />
                      </linearGradient>
                      <linearGradient
                        id="IconifyId18d483ce66b1cad564"
                        x1="193.51"
                        x2="293.51"
                        y1="109.74"
                        y2="278.87"
                        gradientTransform="translate(0 52)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#f1e5fc" />
                      </linearGradient>
                      <filter
                        id="IconifyId18d483ce66b1cad565"
                        width="197"
                        height="249"
                        x="161.9"
                        y="135.46"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="8" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                      </filter>
                    </defs>
                    <path
                      fill="url(#IconifyId18d483ce66b1cad563)"
                      d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"
                    />
                    <path
                      fill="url(#IconifyId18d483ce66b1cad564)"
                      d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z"
                      filter="url(#IconifyId18d483ce66b1cad565)"
                      transform="translate(1.494 2.203)scale(.24566)"
                    />
                  </svg>
                  <span>Boostrap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>

      <Link id="card" to="/blog">
        <div class="card">
          <div class="background_image_blog"></div>
          <div class="content">
            <h5>Blog</h5>
            <br />
            <p>Website: Empresa de arquitectura y construcción</p>
            <br />
            <p>Frontend</p>
            <div class="icons">
              <ul class="card-social">
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#E14E1D" rx="60" />
                      <path
                        fill="#fff"
                        d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"
                      />
                      <path
                        fill="#EBEBEB"
                        d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"
                      />
                    </g>
                  </svg>
                  <span>html</span>
                </li>
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#0277BD" rx="60" />
                      <path
                        fill="#EBEBEB"
                        d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"
                      />
                      <path
                        fill="#fff"
                        d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"
                      />
                    </g>
                  </svg>
                  <span>Css</span>
                </li>
                <li class="card-social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                  >
                    <defs>
                      <linearGradient
                        id="IconifyId18d483ce66b1cad563"
                        x1="76.079"
                        x2="523.48"
                        y1="10.798"
                        y2="365.95"
                        gradientTransform="translate(1.11 14.613)scale(.24566)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#9013fe" />
                        <stop offset="1" stopColor="#6610f2" />
                      </linearGradient>
                      <linearGradient
                        id="IconifyId18d483ce66b1cad564"
                        x1="193.51"
                        x2="293.51"
                        y1="109.74"
                        y2="278.87"
                        gradientTransform="translate(0 52)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#f1e5fc" />
                      </linearGradient>
                      <filter
                        id="IconifyId18d483ce66b1cad565"
                        width="197"
                        height="249"
                        x="161.9"
                        y="135.46"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="8" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                      </filter>
                    </defs>
                    <path
                      fill="url(#IconifyId18d483ce66b1cad563)"
                      d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"
                    />
                    <path
                      fill="url(#IconifyId18d483ce66b1cad564)"
                      d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z"
                      filter="url(#IconifyId18d483ce66b1cad565)"
                      transform="translate(1.494 2.203)scale(.24566)"
                    />
                  </svg>
                  <span>Boostrap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
