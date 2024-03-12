// JavaScript code for toggling dark mode
const darkModeToggle = document.getElementById("darkmode-toggle");

darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("dark1").classList.toggle("hidden");
  document.getElementById("dark2").classList.toggle("hidden");
});

// GSAP ANIMATIONS
var t1 = gsap.timeline();
t1.from("#typingtext", {
  y: -300,
  opacity: 0,
  duration: 1,
  delay: 0.2,
});
t1.from("#darklight", {
  y: -300,
  opacity: 0,
  duration: 1.2,
});
t1.from("#firstgrid", {
  x: -600,
  opacity: 0,
  duration: 1,
});
t1.from("#inputfld", {
  opacity: 0,
  duration: 1.2,
});
t1.from("#button", {
  scale: 2.2,
  opacity: 0,
  duration: 0.7,
});
t1.from("#gridsecond", {
  x: 650,
  scale: 0,
  opacity: 0,
  duration: 0.7,
});
t1.from("#circle", {
  rotate: 360,
  opacity: 0,
  duration: 0.7,
});
t1.timeScale(1);

// FETCHING DATA FROM API
let inputdata = document.getElementById("inp1");
let btn1 = document.getElementById("button");
let grid2 = document.getElementById("gridsecond");
inputdata.addEventListener("change", () => {
  let p = fetch(`https://api.github.com/users/${inputdata.value}`);
  p.then((value1) => {
    if (!value1.ok) {
      throw new Error(`HTTP error! Status: ${value1.status}`);
    }
    return value1.json();
  })
    .then((value2) => {
      const dateData = value2.created_at.slice(
        0,
        value2.created_at.length - 10
      );
      const inputDateString = dateData;
      const inputDate = new Date(`${inputDateString}T00:00:00.000Z`);
      const dayOfMonth = inputDate.getUTCDate();
      const monthName = new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(inputDate);
      const fullYear = inputDate.getUTCFullYear();
      const formattedDate = `${dayOfMonth} ${monthName} ${fullYear}`;
      grid2.innerHTML = `<div class="w-full h-auto col-span-3 md:col-span-1">
    <div class="w-full h-full flex items-start justify-center shrink-0">
      <div
        id="circle"
        class="w-[9rem] h-[9rem] bg-black rounded-full container flex shrink-0 overflow-hidden cursor-pointer"
      >
        <img
          class="w-full object-cover"
          src="${value2.avatar_url}"
          alt="GitHub"
        />
      </div>
    </div>
  </div>
  <div
    id="info"
    class="w-full h-auto col-span-3 md:col-span-2 px-[1.2rem] md:px-[0rem]"
  >
    <div
      class="w-full h-auto flex items-center justify-center md:justify-between flex-wrap"
    >
      <div
        class="text-black text-[1.9rem] w-full md:w-auto text-center dark:text-white"
      >
        ${value2.name}
      </div>
      <div
        class="text-gray-400 text-[1rem] w-full md:w-auto text-center dark:text-gray-300"
      >

        Joined ${formattedDate} 
      </div>
    </div>
    <div
      class="w-full h-auto flex items-center justify-center md:justify-start mb-[2rem]"
    >
      <a class="text-blue-600 text-[1.1rem] dark:text-[#008080]" href="${
        value2.html_url
      }">
        @${value2.login}
      </a>
    </div>
    <div
      class="w-full h-auto flex items-center justify-center md:justify-start mb-[2.5rem]"
    >
      <div
        class="opacity-40 text-[1.1rem] dark:text-gray-300 dark:opacity-100"
      >
        ${value2.bio ? `${value2.bio}` : "Bio Not Added"}
      </div>
    </div>
    <div
      class="w-full h-auto flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center justify-center md:justify-between bg-blue-50 px-[2rem] py-[1rem] rounded-md mb-[2rem] dark:bg-[#eaeaea]"
    >
      <div class="flex flex-col items-start">
        <div class="opacity-70 text-[1.1rem]">Repos</div>
        <div class="text-[1.2rem]">${value2.public_repos}</div>
      </div>
      <div class="flex flex-col items-start">
        <div class="opacity-70 text-[1.1rem]">Followers</div>
        <div class="text-[1.2rem]">${value2.followers}</div>
      </div>
      <div class="flex flex-col items-start">
        <div class="opacity-70 text-[1.1rem]">Following</div>
        <div class="text-[1.2rem]">${value2.following}</div>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row items-center gap-[1rem] md:gap-[4rem] flex-wrap md:flex-nowrap"
    >
      <div class="w-full h-auto flex flex-col items-start gap-3">
        <div
          class="flex flex-row items-center justify-start gap-5 md:gap-4"
        >
          <div>
            <i
              class="fa-solid fa-location-dot text-gray-500 text-[1.3rem]"
            ></i>
          </div>
          <div class="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white ${
            !value2.location ? "disabled" : ""
          }">
            ${value2.location ? `${value2.location}` : "Location Not Added"}
          </div>
        </div>
        <div class="flex flex-row items-center justify-start gap-4">
          <div>
            <i class="fa-solid fa-link text-gray-500 text-[1.3rem]"></i>
          </div>
          <a class="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-black dark:hover:text-white dark:cursor-pointer ${
            !value2.blog ? "disabled" : ""
          }" href="${value2.blog ? `${value2.blog}` : "#No Website Added"}">${
        value2.blog ? `Visit Website` : "Website Not Added"
      }</a>
        </div>
      </div>
      <div class="w-full h-auto flex flex-col items-start gap-3">
        <div
          class="flex flex-row items-center justify-start gap-5 md:gap-4"
        >
          <div>
            <i
              class="fa-brands fa-twitter text-gray-500 text-[1.3rem]"
            ></i>
          </div>
          <a class="text-gray-600 dark:text-gray-300 hover:text-black cursor-pointer dark:hover:text-white dark:cursor-pointer ${
            !value2.twitter_username ? "disabled" : ""
          }"
          href="${
            value2.twitter_username
              ? `https://www.twitter.com/${value2.twitter_username}`
              : "#Twitter Not Added"
          }">
          ${
            value2.twitter_username
              ? `${value2.twitter_username}`
              : "Twitter Not Added"
          }
          </a>
        </div>
        <div class="flex flex-row items-center justify-start gap-4">
          <div>
            <i
              class="fa-solid fa-building-user text-gray-500 text-[1.3rem]"
            ></i>
          </div>
          <a class="text-gray-600 dark:text-gray-300 hover:text-black cursor-pointer dark:hover:text-white dark:cursor-pointer ${
            !value2.company ? "disabled" : ""
          }"
          href="${value2.company ? `${value2.company}` : "#No Company"}">${
        value2.company ? `${value2.company}` : "No Company"
      }</a>
        </div>
      </div>
    </div>
  </div>`;
    })
    .catch((error) => {
      console.error("Fetch Error:", error.message);
      grid2.innerHTML = `<div class="w-full h-auto col-span-3">
      <div class="w-full h-[20rem] flex flex-col items-center justify-center">
          <div class="text-[1.2rem] text-black dark:text-white text-center"><i class="fa-regular fa-face-smile text-black dark:text-white"></i> Please Enter Username Correctly!</div><br>
          <div class="text-[1.1rem] text-center" style="color: red;"><i class="fa-solid fa-circle-exclamation" style="color: red;"></i> Requested User Not Found!</div>
        </div>
    </div>`;
      Toastify({
        text: `<i class="fa-solid fa-circle-exclamation" style="color: white;"></i> Username Not Found`,
        duration: 3000,
        close: true,
        gravity: "top",
        backgroundColor: "linear-gradient(to right, #ff3e3e, #ff0000)",
        stopOnFocus: true,
        escapeMarkup: false,
      }).showToast();
    });
  inputdata.value = "";
});
