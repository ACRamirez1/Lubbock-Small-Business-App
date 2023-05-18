import cookie from "cookie";

const state = {
  user: {
    loggedIn: false,
    // If the device has a cookie, parse it. If not, set to blank string.
    username: document.cookie ? cookie.parse(document.cookie).username : "",
  },
  listings: [
    {
      id: 1,
      Business_Name: "Fajita Pete-Lubbock",
      Description:
        "Gather around something good. Serving familia-style so everyone gets their favorites.",
      Hours: "11:00 AM - 8:00 PM",
      Address: "7604 Milwaukee Ave Ste 100, Lubbock, TX 79424",
      Phone_Number: "(806) 701-5207",
      Website: "https://fajitapetes.com/",
    },
    {
      id: 2,
      Business_Name: "On The Border Mexican Grill & Cantina - Lubbock",
      Description:
        "Casual restaurant chain featuring Tex-Mex standards such as fajitas, burritos & grilled meats.",
      Hours: "11:00 AM - 10:00 PM",
      Address: "6709 Slide Rd, Lubbock, TX 79424",
      Phone_Number: "(806) 686-1550",
      Website: "order.ontheborder.com",
    },
    {
      id: 3,
      Business_Name: "Chelo's Mexican Restaurant",
      Description: "Cute Mexican spot. Come check us out!",
      Hours: "7:00 AM - 9:00 PM",
      Address: "730 US-62, Wolfforth, TX 79382",
      Phone_Number: "(806) 866-2222",
      Website: "chelosmx.com",
    },
    {
      id: 4,
      Business_Name: "Chilito's Pepper Cafe",
      Description: "Cute Mexican spot. Come check us out!",
      Hours: "11:00 AM - 9:00 PM",
      Address: "449 US-62, Wolfforth, TX 79382",
      Phone_Number: "(806) 866-0505",
      Website: "https://chilitospeppercafe.godaddysites.com/",
    },
    {
      id: 5,
      Business_Name: "Roberto's Taco Shop Lubbock, TX",
      Description: "Excellent service! Best food in town, BY FAR!",
      Hours: "9:00 AM - 9:00 PM",
      Address: "7717 Milwaukee Ave suite 100, Lubbock, TX 79424",
      Phone_Number: "(806) 317-1326",
      Website: "https://robertostacoshopsd.com/",
    },
    {
      id: 6,
      Business_Name: "Albarran's Mexican Bar & Grill",
      Description:
        "Spacious & airy eatery serving a menu of Mexican eats such as tacos, lunch specials & margaritas.",
      Hours: "11:00 AM - 10:00 PM",
      Address: "7722 Milwaukee Ave, Lubbock, TX 79424",
      Phone_Number: "(806) 771-2869",
      Website: "https://albarrans.com",
    },
    {
      id: 7,
      Business_Name: "Elotes Siam Foodie Cafe",
      Description:
        "Delicious elotes, tacos, chips and queso, guacamole, and great atmosphere!",
      Hours: "11:00 AM - 9:00 PM",
      Address: "602 Donald Preston Dr #104, Wolfforth, TX 79382",
      Phone_Number: "(806) 855-2023",
      Website: "https://elothai.com",
    },
    {
      id: 8,
      Business_Name: "Uncle Julio's Lubbock",
      Description:
        "Tex-Mex chain serving mesquite-grilled fare & margarita-sangria swirls in a hacienda-style space.",
      Hours: "11:00 AM - 10:00 PM",
      Address: "6230 Slide Rd, Lubbock, TX 79414",
      Phone_Number: "(806) 516-0050",
      Website:
        "http://places.singleplatform.com/uncle-julios-68/menu?ref=google",
    },
    {
      id: 9,
      Business_Name: "Picoso's Mexican Kitchen",
      Description:
        "Gather around something good. Serving familia-style so everyone gets their favorites.",
      Hours: "11:00 AM - 9:00 PM",
      Address: "7611 Milwaukee Ave, Lubbock, TX 79424",
      Phone_Number: "(806) 319-6740",
      Website: "https://picososmexicankitchen.alohaorderonline.com",
    },
    {
      id: 10,
      Business_Name: "QDOBA Mexican Eats",
      Description:
        "Simple Mexican counter-serve chain for burritos, tacos & more, including health-oriented options.",
      Hours: "11:00 AM - 10:00 PM",
      Address: "5017 Milwaukee Ave Ste 300, Lubbock, TX 79407",
      Phone_Number: "(806) 771-2411",
      Website: "https://qdoba.com",
    },
  ],
};

export default state;
