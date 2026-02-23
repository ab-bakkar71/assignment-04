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

