let interviewCount = [];
let rejectedCount =[];

let total = document.getElementById('total');
let totalJob = document.getElementById('total-job')
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

// toggle btn id
const AllFilterBtn = document.getElementById('filter-btn-all')
const interviewFilterBtn = document.getElementById('filter-btn-interview')
const rejectedFilterBtn = document.getElementById('filter-btn-rejected')

const cards = document.getElementById('all-card');
const allCard = cards.children.length;


function jobCalculate (){
    total.innerText = allCard;
    totalJob.innerText=allCard;
    interview.innerText = interviewCount.length;
    rejected.innerText = rejectedCount.length;
}
jobCalculate();

// toggle Btn Function
function toggleBtn(id){
    AllFilterBtn.classList.remove('bg-[#3B82F6]')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]')

    AllFilterBtn.classList.add('bg-white')
    interviewFilterBtn.classList.add('bg-white')
    rejectedFilterBtn.classList.add('bg-white')


    const selected = document.getElementById(id)
    selected.classList.remove('bg-white')
    selected.classList.add('bg-[#3B82F6]')

    if(id == 'filter-btn-interview'){
         cards.classList.add('hidden')
         filterSection.classList.remove('hidden')
    }
    else if(id == 'filter-btn-all'){
        cards.classList.remove('hidden')
        filterSection.classList.add('hidden')
    }
    else if(id == 'filter-btn-rejected'){
        cards.classList.add('hidden')
        filterSection.classList.remove('hidden')
    }
}

// main section Function
const mainSection = document.getElementById('main-section')
mainSection.addEventListener('click', function(event){
    // interview btn function
    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;

    const jobName = parentNode.querySelector('.job-name').innerText;
    const jobNameDsc = parentNode.querySelector('.job-name-dsc').innerText;
    const jobLocation = parentNode.querySelector('.job-location').innerText;
    const jobStatus = parentNode.querySelector('.job-status').innerText;
    const jobDsc = parentNode.querySelector('.job-dsc').innerText;
    // change status
parentNode.querySelector('.job-status').innerText = 'Interview';
    

const jobCardInfo= {
    jobName,
    jobNameDsc,
    jobLocation,
    jobStatus : 'Interview',
    jobDsc
}

const exitingJob = interviewCount.find(jobItem=> jobItem.jobName== jobCardInfo.jobName)


if(!exitingJob){
    interviewCount.push(jobCardInfo)
}

rejectedCount = rejectedCount.filter(jobItem => jobItem.jobName!= jobCardInfo.jobName);
filterRender();
jobCalculate();
    }



    // reject btn function
    else if(event.target.classList.contains('reject-btn')){
        const parentNode = event.target.parentNode.parentNode;

    const jobName = parentNode.querySelector('.job-name').innerText;
    const jobNameDsc = parentNode.querySelector('.job-name-dsc').innerText;
    const jobLocation = parentNode.querySelector('.job-location').innerText;
    const jobStatus = parentNode.querySelector('.job-status').innerText;
    const jobDsc = parentNode.querySelector('.job-dsc').innerText;
    
    // change status
parentNode.querySelector('.job-status').innerText = 'Rejected';
    

const jobCardInfo= {
    jobName,
    jobNameDsc,
    jobLocation,
    jobStatus : 'Rejected',
    jobDsc
}

const exitingJob = rejectedCount.find(jobItem=> jobItem.jobName== jobCardInfo.jobName)

if(!exitingJob){
    rejectedCount.push(jobCardInfo)
}
interviewCount = interviewCount.filter(jobItem => jobItem.jobName!= jobCardInfo.jobName);

filterRenderRejected();
jobCalculate();
    }

});

// filter section
const filterSection = document.getElementById('filter-section');

// interview filter add
function filterRender(){
    filterSection.innerHTML = '';

    for(let interviews of interviewCount){
        console.log(interviews)
        let div = document.createElement('div');
        div.className = 'card bg-base-100 w-full p-6 shadow-sm mb-4'
        div.innerHTML = ` <h4 class="text-[18px] font-bold text-[#002C5C]">${interviews.jobName}</h4>
            <p class="text-[#64748B]">${interviews.jobNameDsc}</p>
            <span class="text-[#64748B] py-4">${interviews.jobLocation}</span>
            <span class=" bg-[#EEF4FF] text-[#002C5C] font-bold px-3 py-2 w-[113px] rounded-md mb-2">${interviews.jobStatus}</span>
            <p class="text-[#323B49] mb-4">${interviews.jobDsc}</p>
           <div class="space-x-2"> 
            <button class="btn btn-outline btn-success">interview</button>
            <button class="btn btn-outline btn-error">Rejected</button>
           </div>
           <button class="btn btn-circle btn-sm absolute top-6 right-6"><i class="fa-solid fa-trash-can"></i></button>
        `
        filterSection.appendChild(div)
    }

   
}

// reject filter add
function filterRenderRejected(){
    filterSection.innerHTML = '';

    for(let rejected of rejectedCount){
        console.log(rejected)
        let div = document.createElement('div');
        div.className = 'card bg-base-100 w-full p-6 shadow-sm mb-4'
        div.innerHTML = ` <h4 class="text-[18px] font-bold text-[#002C5C]">${rejected.jobName}</h4>
            <p class="text-[#64748B]">${rejected.jobNameDsc}</p>
            <span class="text-[#64748B] py-4">${rejected.jobLocation}</span>
            <span class=" bg-[#EEF4FF] text-[#002C5C] font-bold px-3 py-2 w-[113px] rounded-md mb-2">${rejected.jobStatus}</span>
            <p class="text-[#323B49] mb-4">${rejected.jobDsc}</p>
           <div class="space-x-2"> 
            <button class="btn btn-outline btn-success">interview</button>
            <button class="btn btn-outline btn-error">Rejected</button>
           </div>
           <button class="btn btn-circle btn-sm absolute top-6 right-6"><i class="fa-solid fa-trash-can"></i></button>
        `
        filterSection.appendChild(div)
    }

   
}