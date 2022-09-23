// let container = document.querySelector(".container");
// container.classList.add("container");
// let profile = document.createElement("div");
// profile.classList.add("profile");
// container.appendChild("profile");
// let img1 = document.querySelector(".post-pic");
// let names = {
//   name1: "cristiano",
//   name2: "jhanvikapoor",
//   name3: "sagarcasm",
//   name4: "icc",
//   name5: "jinmiran_",
//   img: "img1",
// };
// console.log(names.img);
// console.log(names.name1);

let container = document.querySelector(".container");
let buttons = document.querySelector(".buttons");
let img1 = "../images/testimonial-avatar04.jpg";
let img2 = "../images/testimonial-avatar03.jpg";
let img3 = "../images/testimonial-avatar02.jpg";
let likes = " liked by ";
let and = " and ";
console.log(buttons);
console.log(container);
let profileList = [
  {
    profilePicture: "../images/IMG_20220715_153423_583.jpg",
    profileName: "sriram.siva",
    post: "../images/united.jpg",
    likedByUser: "paramesh_26",
    likeNumbers: "146 others",
    caption: "finally..",
    viewComments: "View all 19 comments",
    comment1: "nice",
    comment2: "bruh..",
    commentProfileName1: "r_a_m______",
    commentProfileName2: "jeevan_jarvis",
  },

  {
    profilePicture: "../images/IMG_20220715_153423_583.jpg",
    profileName: "sivakami",
    post: "../images/grid4.jpeg",
    likedByUser: "sriram.siva",
    likeNumbers: "68 others",
    caption: "Get out there and live a little.",
    viewComments: "View all 5 comments",
    comment1: "good",
    comment2: "nice",
    commentProfileName1: "sriram.siva",
    commentProfileName2: "gurusrisivakami",
  },

  {
    profilePicture: "../images/IMG_20220715_153423_583.jpg",
    profileName: "gurusrisivakami",
    post: "../images/grid5.jpeg",
    likedByUser: "sivakami",
    likeNumbers: "152 others",
    caption: "Life is better when you're laughing",
    viewComments: "View all 23 comments",
    comment1: "great",
    comment2: "cool",
    commentProfileName1: "sivakami",
    commentProfileName2: "sriram.siva",
  },

  {
    profilePicture: "../images/ajith.jpg",
    profileName: "ajithkumar",
    post: "../images/grid12.jpeg",
    likedByUser: "shalini.ajith",
    likeNumbers: "123,000 others",
    caption: "Live and let live",
    viewComments: "View all 3211 comments",
    comment1: "Thala..",
    comment2: "Dashing!",
    commentProfileName1: "sriram.siva",
    commentProfileName2: "actor_vijay",
  },

  {
    profilePicture: "../images/download.jpg",
    profileName: "cristiano",
    post: "../images/Caesar-Ronaldo.webp",
    likedByUser: "georgina",
    likeNumbers: "654,222 others",
    caption: "Let's go Devils!",
    viewComments: "View all 9116 comments",
    comment1: "G.O.A.T",
    comment2: "Great comeback champ",
    commentProfileName1: "sriram.siva",
    commentProfileName2: "brunofernandes",
  },
];

let postContainer = document.createElement("div");
postContainer.classList.add("postContainer");
container.appendChild(postContainer);

for (let i = 0; i < profileList.length; i++) {
  console.log("hi");

  let profile = profileList[i];
  let profileDiv = document.createElement("div");
  profileDiv.classList.add("profile");

  postContainer.appendChild(profileDiv);

  let profileDetailsDiv = document.createElement("div");
  let profileImg = document.createElement("img");
  profileImg.src = profile.profilePicture;
  profileImg.classList.add("profile-picture");
  profileDetailsDiv.appendChild(profileImg);
  profileDiv.appendChild(profileDetailsDiv);

  let profileName = document.createElement("div");
  profileName.classList.add("profile-name");
  profileName.innerText = profile.profileName;
  profileDiv.appendChild(profileName);
  //   profileDetailsDiv.appendChild(profileDetailsDiv);

  let postDiv = document.createElement("div");
  postDiv.classList.add("post");
  let postImg = document.createElement("img");
  postImg.classList.add("post-pic");
  postImg.src = profile.post;
  postDiv.appendChild(postImg);
  postContainer.appendChild(postDiv);

  let likedBy = document.createElement("div");
  likedBy.classList.add("liked-by");
  postContainer.appendChild(likedBy);
  let gridImage = document.createElement("div");
  gridImage.classList.add("grid-image");
  likedBy.appendChild(gridImage);

  let picture1 = document.createElement("div");
  gridImage.appendChild(picture1);
  let pic1 = document.createElement("img");
  pic1.classList.add("picture1");
  pic1.src = img1;
  picture1.appendChild(pic1);

  let picture2 = document.createElement("div");
  gridImage.appendChild(picture2);
  let pic2 = document.createElement("img");
  pic2.classList.add("picture1");
  pic2.src = img2;
  picture2.appendChild(pic2);

  let picture3 = document.createElement("div");
  gridImage.appendChild(picture3);
  let pic3 = document.createElement("img");
  pic3.classList.add("picture1");
  pic3.src = img3;
  picture3.appendChild(pic3);

  let likedByText = document.createElement("div");
  likedByText.classList.add("light-text");
  likedByText.innerText = likes;
  likedBy.appendChild(likedByText);

  let User = document.createElement("div");
  User.classList.add("bold-text");
  User.innerText = profile.likedByUser;
  likedBy.appendChild(User);

  let andText = document.createElement("div");
  andText.classList.add("light-text");
  andText.innerText = and;
  likedBy.appendChild(andText);

  let likeNumbers = document.createElement("div");
  likeNumbers.classList.add("bold-text");
  likeNumbers.innerHTML = profile.likeNumbers;
  likedBy.appendChild(likeNumbers);

  let caption = document.createElement("div");
  caption.classList.add("caption");
  postContainer.appendChild(caption);
  let captionProfileName = document.createElement("div");
  captionProfileName.classList.add("caption-profile-name");
  captionProfileName.innerText = profile.profileName;
  caption.appendChild(captionProfileName);
  let captionText = document.createElement("div");
  captionText.classList.add("caption-light-text");
  captionText.innerText = profile.caption;
  caption.appendChild(captionText);

  let viewComments = document.createElement("div");
  viewComments.classList.add("view-comments");
  viewComments.innerText = profile.viewComments;
  postContainer.appendChild(viewComments);

  let firstComment = document.createElement("div");
  firstComment.classList.add("caption");
  postContainer.appendChild(firstComment);
  let firstCommentProfile = document.createElement("div");
  firstCommentProfile.classList.add("caption-profile-name");
  firstCommentProfile.innerText = profile.commentProfileName1;
  firstComment.appendChild(firstCommentProfile);
  let firstCommentText = document.createElement("div");
  firstCommentText.classList.add("caption-light-text");
  firstCommentText.innerText = profile.comment1;
  firstComment.appendChild(firstCommentText);

  let secondComment = document.createElement("div");
  secondComment.classList.add("caption");
  postContainer.appendChild(secondComment);
  let secondCommentProfile = document.createElement("div");
  secondCommentProfile.classList.add("caption-profile-name");
  secondCommentProfile.innerText = profile.commentProfileName2;
  secondComment.appendChild(secondCommentProfile);
  let secondCommentText = document.createElement("div");
  secondCommentText.classList.add("caption-light-text");
  secondCommentText.innerText = profile.comment2;
  secondComment.appendChild(secondCommentText);

  for (let i = 0; i <= 6; i++) {
    let linebreak = document.createElement("br");
    postContainer.appendChild(linebreak);
  }
}
