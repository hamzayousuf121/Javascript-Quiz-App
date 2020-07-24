
let questions = [
  {
    question: "When did Pakistan break from British India to become a country?",
    answer: "1947",
    options: [
      "1947", 
      "1975",
      "1955",
      "1948"
    ]
  },
  {
    question: "Who led the push for the creation of an independent Pakistan and is considered the founder of the nation?",    answer: "Central Processing Unit",
    answer: "Muhammad Ali Jinnah",
    options: [
      "Allama Iqbal",
      "Mohandas Ghanghi",
      "Muhammad Ali Jinnah",
      "Asif Ali Zardari"
    ]
  },
  {
    question: "When did Bangladesh split from Pakistan?",
    answer: "1971",
    options: [
      "1948",
      "1955",
      "1971",
      "1947"
    ]
  }, 
  {
    question: "What is the capital of Pakistan?",
    answer: "Islamabad",
    options: [
      "Karachi",
      "Lahore",
      "Multan",
      "Islamabad"
    ]
  }, 

  {
    question: "What was the original capital of Pakistan?",
    answer: "Karachi",
    options: [
      "Karachi",
      "Lahore",
      "Multan",
      "Islamabad"
    ]
  }, 

  {
    question: "Which country does not border Pakistan?",
    answer: "Nepal",
    options: [
      "India",
      "Nepal",
      "China",
      "None of these"
    ]
  }, 

  {
    question: "Where is K2?",
    answer: "KaraKoram",
    options: [
      "Hindu Kash",
      "Pamir",
      "Kara Koram",
      "None of these"
    ]
  }, 

  {
    question: "Who was the first woman prime minister of Pakistan?",
    answer: "Benazir Bhutto",
    options: [
      "Benazir Bhutto",
      "Sherry Rehman",
      "Sonia Gandhi",
      "None of these"
    ]
  }, 

  {
    question: "With which country is Pakistan not allied?",
    answer: "India",
    options: [
      "UAE",
      "India",
      "China",
      "None of these"
    ]
  }, 

  {
    question: "Who is considered the father of Pakistan’s nuclear program?",
    answer: "Abdul Qadeer Khan",
    options: [
      "Abdul Qadeer Khan",
      "Nawaz sharif",
      "Asif Ali Zardari",
      "None of these"
    ]
  }, 


];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);
};

function next() {
   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "result.html";
  }

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  // destructuring
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
