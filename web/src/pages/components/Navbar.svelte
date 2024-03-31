<script>
  import defoultUserLogo from "../../../assets/defoultUserLogo.png";
  import logo from "../../../assets/WebLogo.png";
  const NavLink =
    "px-6 py-1 bg-blue-700 text-white font-bold hover:bg-white hover:border-blue-500 hover:no-underline";

  const center = "flex items-center justify-center";
  const buttonBg =
    "rounded border-x w-full text-sm hover:shadow-lg hover:bg-white";
</script>

<nav class="hidden md:block lg:block bg-gray-50 py-1">
  <div class="{center} gap-10 m-0 px-4 justify-between">
    <a href="/" class="{center} min-w-max hover:no-underline"
      ><img src={logo} alt="Study Path Hub Logo" class="h-8 w-8" />
      <h1
        class="text-xl text-black font-bold mx-4 font-serif hidden md:block lg:block"
      >
        Study Path Hub
      </h1>
    </a>

    <div
      class="gradient-border w-full h-8 m-0 p-0 flex justify-center items-center"
    >
      <input
        type="text"
        placeholder="Search"
        class="w-full m-0 border-0 py-1 px-2 text-sm outline-none"
      />
      <button class="m-0 border-0 bg-white border-l border-gray-300">
        <svg
          viewBox="2 2 20 20"
          class="h-3 w-4 bg-transparent"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g><g id="SVGRepo_iconCarrier">
            <defs>
              <path
                id="search-a"
                d="M11.7099609,0.572509766 C9.46940104,1.29012044 7.99951172,3.05419922 7.30029297,5.86474609 C6.25146484,10.0805664 4.95166016,10.6181641 0.719970703,9.11865234 C2.23974609,11.9257813 5.32006836,13.0512695 7.30029297,13.0512695 C9.28051758,13.0512695 14.4091797,10.2941895 13.8215332,5.0534668 C13.3114421,3.52709961 12.6075846,2.03344727 11.7099609,0.572509766 Z"
              ></path>
              <path
                id="search-c"
                d="M14.1791377,12.7701494 L19.7100661,18.3101411 C20.0966446,18.6967197 20.0966446,19.3234875 19.7100661,19.7100661 C19.3234875,20.0966446 18.6967197,20.0966446 18.3101411,19.7100661 L12.7803471,14.1712106 C11.4385246,15.2160226 9.75152329,15.8383427 7.91917136,15.8383427 C3.54553379,15.8383427 0,12.2928089 0,7.91917136 C0,3.54553379 3.54553379,0 7.91917136,0 C12.2928089,0 15.8383427,3.54553379 15.8383427,7.91917136 C15.8383427,9.74688445 15.2191696,11.4299819 14.1791377,12.7701494 Z M7.91917136,13.8585499 C11.1993995,13.8585499 13.8585499,11.1993995 13.8585499,7.91917136 C13.8585499,4.63894318 11.1993995,1.97979284 7.91917136,1.97979284 C4.63894318,1.97979284 1.97979284,4.63894318 1.97979284,7.91917136 C1.97979284,11.1993995 4.63894318,13.8585499 7.91917136,13.8585499 Z"
              ></path>
            </defs>
            <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
              <g transform="translate(1 2)">
                <mask id="search-b" fill="#ffffff">
                  <use xlink:href="#search-a"></use>
                </mask> <use fill="#D8D8D8" xlink:href="#search-a"></use>
                <g fill="#FFA0A0" mask="url(#search-b)">
                  <rect width="24" height="24" transform="translate(-3 -4)"
                  ></rect>
                </g>
              </g>
              <mask id="search-d" fill="#ffffff">
                <use xlink:href="#search-c"></use>
              </mask>
              <use fill="#000000" fill-rule="nonzero" xlink:href="#search-c"
              ></use>
              <g fill="#7600FF" mask="url(#search-d)">
                <rect width="24" height="24" transform="translate(-2 -2)"
                ></rect>
              </g>
            </g>
          </g></svg
        >
      </button>
    </div>

    <a
      href="/userDashboard/"
      class="bg-blue-600 text-white px-4 py-1 rounded-md">Chatbot</a
    >

    <a href="/" class="{center} min-w-max hover:no-underline"
      ><img src={defoultUserLogo} alt="Study Path Hub Logo" class="h-8 w-8" />
    </a>
  </div>
</nav>

<style>
  .profileLogo {
    width: 50px;
    height: 50px;
  }
  a {
    color: white;
  }
  a:hover {
    text-decoration: none;
  }
  .gradient-backgound {
    background: linear-gradient(to top, #3b82f6, #805ad5);
  }
  .gradient-border {
    border-width: 2px;
    border-radius: 10px;
    border-style: solid;
    border-image: linear-gradient(to bottom, #805ad5, #3b82f6) 1;
  }
</style>
