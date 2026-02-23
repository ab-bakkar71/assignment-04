let interviewCount = [];
let rejectedCount = [];
let currentStatus = "all";

let total = document.getElementById("total");
let totalJob = document.getElementById("total-job");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

// toggle btn id
const AllFilterBtn = document.getElementById("filter-btn-all");
const interviewFilterBtn = document.getElementById("filter-btn-interview");
const rejectedFilterBtn = document.getElementById("filter-btn-rejected");

const cards = document.getElementById("all-card");
const allCard = cards.children.length;

function jobCalculate() {
  total.innerText = allCard;
  totalJob.innerText = allCard;
  interview.innerText = interviewCount.length;
  rejected.innerText = rejectedCount.length;
}
jobCalculate();

// toggle Btn Function

function toggleBtn(id) {
  AllFilterBtn.classList.remove("bg-[#3B82F6]");
  interviewFilterBtn.classList.remove("bg-[#3B82F6]");
  rejectedFilterBtn.classList.remove("bg-[#3B82F6]");

  AllFilterBtn.classList.add("bg-white");
  interviewFilterBtn.classList.add("bg-white");
  rejectedFilterBtn.classList.add("bg-white");

  const selected = document.getElementById(id);
  currentStatus = id;
  console.log(currentStatus);

  selected.classList.remove("bg-white");
  selected.classList.add("bg-[#3B82F6]");

  if (id == "filter-btn-interview") {
    cards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    filterRenderInterview();
  } else if (id == "filter-btn-all") {
    cards.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "filter-btn-rejected") {
    cards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    filterRenderRejected();
  }
}

// main section Function

document.addEventListener("click", function (event) {
  // interview btn function
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobNameDsc = parentNode.querySelector(".job-name-dsc").innerText;
    const jobLocation = parentNode.querySelector(".job-location").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobDsc = parentNode.querySelector(".job-dsc").innerText;
    // change status
    parentNode.querySelector(".job-status").innerText = "Interview";

    const jobCardInfo = {
      jobName,
      jobNameDsc,
      jobLocation,
      jobStatus: "Interview",
      jobDsc,
    };

    const exitingJob = interviewCount.find(
      (jobItem) => jobItem.jobName == jobCardInfo.jobName,
    );

    if (!exitingJob) {
      interviewCount.push(jobCardInfo);
    }

    rejectedCount = rejectedCount.filter(
      (jobItem) => jobItem.jobName !== jobCardInfo.jobName,
    );

    if (currentStatus == "filter-btn-rejected") {
      filterRenderRejected();
    }

    jobCalculate();
  }

  // reject btn function
  else if (event.target.classList.contains("reject-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobNameDsc = parentNode.querySelector(".job-name-dsc").innerText;
    const jobLocation = parentNode.querySelector(".job-location").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobDsc = parentNode.querySelector(".job-dsc").innerText;

    // change status
    parentNode.querySelector(".job-status").innerText = "Rejected";

    const jobCardInfo = {
      jobName,
      jobNameDsc,
      jobLocation,
      jobStatus: "Rejected",
      jobDsc,
    };

    const exitingJob = rejectedCount.find(
      (jobItem) => jobItem.jobName == jobCardInfo.jobName,
    );

    if (!exitingJob) {
      rejectedCount.push(jobCardInfo);
    }

    interviewCount = interviewCount.filter(
      (jobItem) => jobItem.jobName !== jobCardInfo.jobName,
    );

    if (currentStatus == "filter-btn-interview") {
      filterRenderInterview();
    }

    jobCalculate();
  }
});

// filter section
const filterSection = document.getElementById("filter-section");

// interview filter add
function filterRenderInterview() {
  filterSection.innerHTML = "";

  for (let interviews of interviewCount) {
    let div = document.createElement("div");
    div.className = "card bg-base-100 w-full p-6 shadow-sm mb-4";
    div.innerHTML = `
<h4 class="job-name text-[18px] font-bold text-[#4f5255]">${interviews.jobName}</h4>
<p class="job-name-dsc text-[#64748B]">${interviews.jobNameDsc}</p>
<span class="job-location text-[#64748B] py-4">${interviews.jobLocation}</span>
<span class="job-status bg-[#EEF4FF] text-[#002C5C] font-bold px-3 py-2 w-[113px] rounded-md mb-2">${interviews.jobStatus}</span>
<p class="job-dsc text-[#323B49] mb-4">${interviews.jobDsc}</p>

<div class="space-x-2">
<button class="interview-btn btn btn-outline btn-success">interview</button>
<button class="reject-btn btn btn-outline btn-error">Rejected</button>
</div>
`;
    filterSection.appendChild(div);
  }
}

// reject filter add
function filterRenderRejected() {
  filterSection.innerHTML = "";

  for (let rejectedItem of rejectedCount) {
    let div = document.createElement("div");
    div.className = "card bg-base-100 w-full p-6 shadow-sm mb-4";
    div.innerHTML = `
<h4 class="job-name text-[18px] font-bold text-[#4f5255]">${rejectedItem.jobName}</h4>
<p class="job-name-dsc text-[#64748B]">${rejectedItem.jobNameDsc}</p>
<span class="job-location text-[#64748B] py-4">${rejectedItem.jobLocation}</span>
<span class="job-status bg-[#EEF4FF] text-[#002C5C] font-bold px-3 py-2 w-[113px] rounded-md mb-2">${rejectedItem.jobStatus}</span>
<p class="job-dsc text-[#323B49] mb-4">${rejectedItem.jobDsc}</p>

<div class="space-x-2">
<button class="interview-btn btn btn-outline btn-success">interview</button>
<button class="reject-btn btn btn-outline btn-error">Rejected</button>
</div>
`;
    filterSection.appendChild(div);
  }
}
