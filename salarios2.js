var Webflow = Webflow || [];
let data={
  group: '',
  experience:'',
  sales:'',
  finance:'',
  product:'',
  internal:'',
  marketing:'',
  analytics:'',
  country:'',
  level:''
}
const select = ()=>{
  const developmentEngineering = document.getElementById('Development-Engineering');
  const salesBusinessDev = document.getElementById('Sales-Business-Dev');
  const financeAccounting = document.getElementById('Finance-Accounting');
  const productDevDesign = document.getElementById('Product-Dev-Design');
  const hrInternalOps = document.getElementById('HR-Internal-Ops');
  const marketingBranding = document.getElementById('Marketing-Branding');
  const dataAnalytics = document.getElementById('Data-Analytics');
  const chooseCountry = document.getElementById('group-country');
  const chooseTheExperience = document.getElementById('select-level');
  const estimateCost = document.getElementById('submit');
 
  if(data.group === 'Development & Engineering'){
  developmentEngineering.style.display='flex'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='none'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
  }else if(data.group === 'Sales & Business Dev'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='flex'
  financeAccounting.style.display='none'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
  }else if(data.group === 'Finance & Accounting'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='flex'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
 } else if(data.group === 'Product Dev & Design'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='none'
  productDevDesign.style.display='flex'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
  } else if(data.group === 'HR & Internal Ops'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='none'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='flex'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
 } else if(data.group === 'Marketing & Branding'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='none'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='flex'
  dataAnalytics.style.display='none'
  }else if(data.group === 'Data & Analytics'){
  developmentEngineering.style.display = 'none';
  salesBusinessDev.style.display = 'none';
  financeAccounting.style.display = 'none';
  productDevDesign.style.display = 'none';
  hrInternalOps.style.display = 'none';
  marketingBranding.style.display = 'none';
  dataAnalytics.style.display = 'flex';
  }
}

 const setPrice = ()=>{
    const candidatesSalary = document.getElementById('Candidates-salary')
    const teilursFee = document.getElementById('teilurs-fee')
    const price = document.getElementById('price')
    const median = document.getElementById('median')
    const min = document.getElementById('min')
    const max = document.getElementById('max')
    const total = document.getElementById('total')
    const bar = document.getElementById('bar')


    if(data.group === 'Development & Engineering' && data.experience === 'Infrastructure Engineer' && data.level === 'Mid Level'){
        price.textContent='3,750'
        total.textContent='3,750'
        median.textContent='3,750'
        min.textContent='3,125'
        max.textContent='5,000'
        candidatesSalary.textContent='2,960'
        teilursFee.textContent='740'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Infrastructure Engineer' && data.level === 'Senior Level'){
        price.textContent='6,250'
        total.textContent='6,250'
        median.textContent='6,250'
        min.textContent='5,000'
        max.textContent='7,500'
        candidatesSalary.textContent='5,000'
        teilursFee.textContent='1,250'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Infrastructure Engineer' && data.level === 'Manager/Director Level'){
        price.textContent='10,000'
        total.textContent='10,000'
        median.textContent='10,000'
        min.textContent='7,500'
        max.textContent='12,500'
        candidatesSalary.textContent='8,000'
        teilursFee.textContent='2,000'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Software Engineer' && data.level === 'Mid Level'){
        price.textContent='5,000'
        total.textContent='5,000'
        median.textContent='5,000'
        min.textContent='3,750'
        max.textContent='6,250'
        candidatesSalary.textContent='4,000'
        teilursFee.textContent='1,000'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Software Engineer' && data.level === 'Senior Level') {
        price.textContent='8,125'
        total.textContent='8,125'
        median.textContent='8,125'
        min.textContent='6,250'
        max.textContent='8,750'
        candidatesSalary.textContent='6,500'
        teilursFee.textContent='1.625'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Software Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='9,375'
        total.textContent='9,375'
        median.textContent='9,375'
        min.textContent='8,750'
        max.textContent='12,500'
        candidatesSalary.textContent='7,500'
        teilursFee.textContent='1,875'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Front-End Developer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Front-End Developer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Front-End Developer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Back-End Developer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Back-End Developer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Back-End Developer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Full-Stack Developer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Full-Stack Developer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Full-Stack Developer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%' 
       }else if(data.group === 'Development & Engineering' && data.experience === 'DevOps Engineer' && data.level === 'Mid Level') {
        price.textContent='6,000'
        total.textContent='6,000'
        median.textContent='6,000'
        min.textContent='3,750'
        max.textContent='6,250'
        candidatesSalary.textContent='4,800'
        teilursFee.textContent='1,200'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'DevOps Engineer' && data.level === 'Senior Level') {
        price.textContent='8,000'
        total.textContent='8,000'
        median.textContent='8,000'
        min.textContent='6,250'
        max.textContent='8,750'
        candidatesSalary.textContent='6,400'
        teilursFee.textContent='1,600'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'DevOps Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='10,000'
        total.textContent='10,000'
        median.textContent='10,000'
        min.textContent='8,750'
        max.textContent='11,250'
        candidatesSalary.textContent='8,000'
        teilursFee.textContent='2,000'
        bar.style.width='50%' 
       }else if(data.group === 'Development & Engineering' && data.experience === 'System Administrator' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'System Administrator' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'System Administrator' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Database Administrator' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Database Administrator' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Database Administrator' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Network Engineer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Network Engineer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Network Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Security Engineer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Security Engineer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Security Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Cloud Engineer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Cloud Engineer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Cloud Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Data Engineer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Data Engineer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Data Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'QA Engineer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'QA Engineer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'QA Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Machine Learning Engineer' && data.level === 'Mid Level') {
        price.textContent='6,000'
        total.textContent='6,000'
        median.textContent='6,000'
        min.textContent='3,750'
        max.textContent='6,250'
        candidatesSalary.textContent='4,800'
        teilursFee.textContent='1,200'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Machine Learning Engineer' && data.level === 'Senior Level') {
        price.textContent='8,000'
        total.textContent='8,000'
        median.textContent='8,000'
        min.textContent='6,250'
        max.textContent='8,750'
        candidatesSalary.textContent='6,400'
        teilursFee.textContent='1,600'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Machine Learning Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='10,000'
        total.textContent='10,000'
        median.textContent='10,000'
        min.textContent='8,750'
        max.textContent='11,250'
        candidatesSalary.textContent='8,000'
        teilursFee.textContent='2,000'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Mobile App Developer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Mobile App Developer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Mobile App Developer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Site Reliability Engineer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Site Reliability Engineer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Site Reliability Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Systems/Solutions Architect' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Systems/Solutions Architect' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Systems/Solutions Architect' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Application Support Engineer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Application Support Engineer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Application Support Engineer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Web Developer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'Web Developer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'Web Developer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'API Developer' && data.level === 'Mid Level') {
        price.textContent='4,375'
        total.textContent='4,375'
        median.textContent='4,375'
        min.textContent='3,125'
        max.textContent='5,625'
        candidatesSalary.textContent='3,500'
        teilursFee.textContent='875'
        bar.style.width='50%'
        }else if(data.group === 'Development & Engineering' && data.experience === 'API Developer' && data.level === 'Senior Level') {
        price.textContent='6,875'
        total.textContent='6,875'
        median.textContent='6,875'
        min.textContent='5,625'
        max.textContent='7,750'
        candidatesSalary.textContent='5,500'
        teilursFee.textContent='1,375'
        bar.style.width='50%' 
        }else if(data.group === 'Development & Engineering' && data.experience === 'API Developer' && data.level === 'Manager/Director Level') {
        price.textContent='8,750'
        total.textContent='8,750'
        median.textContent='8,750'
        min.textContent='7,500'
        max.textContent='10,000'
        candidatesSalary.textContent='7,000'
        teilursFee.textContent='1,750'
        bar.style.width='50%'
        }
       }

const submit = document.getElementById('submit')
submit.addEventListener('click', (e)=>{
  console.log(data)
  setPrice()
})


const selectGroup = document.getElementById('group-select') 
selectGroup.addEventListener('change', (e)=>{
  console.log('calculadora')
  data={
    ...data,
    group: e.target.value
  }
  console.log(data)
  select()
  setPrice()
})

const selectExperience = document.getElementById('Development-Engineering') 
selectExperience.addEventListener('change', (e)=>{
  data={
    ...data,
    experience: e.target.value
  }
  console.log(data)
  select()
  setPrice()
})

const selectSales = document.getElementById('Sales-Business-Dev') 
selectSales.addEventListener('change', (e)=>{
  data={
    ...data,
  sales: e.target.value
}
console.log(data)
select()
setPrice()
})

const selectProduct = document.getElementById('Product-Dev-Design') 
selectProduct.addEventListener('change', (e)=>{
  data={
    ...data,
  product: e.target.value
}
console.log(data)
select()
setPrice()
})

const selectFinance = document.getElementById('Finance-Accounting') 
selectFinance.addEventListener('change', (e)=>{
  data={
    ...data,
  finance: e.target.value
}
console.log(data)
select()
setPrice()
})

const selectInternal = document.getElementById('HR-Internal-Ops') 
selectInternal.addEventListener('change', (e)=>{
  data={
    ...data,
  internal: e.target.value
}
console.log(data)
select()
})

const selectMarketing = document.getElementById('Marketing-Branding') 
selectMarketing.addEventListener('change', (e)=>{
  data={
    ...data,
  marketing: e.target.value
}
console.log(data)
select()
setPrice()
})

const selectAnalytics = document.getElementById('Data-Analytics') 
selectAnalytics.addEventListener('change', (e)=>{
  data={
    ...data,
  analytics: e.target.value
}
console.log(data)
select()
setPrice()
})

const selectCountry = document.getElementById('group-country') 
selectCountry.addEventListener('change', (e)=>{
  data={
    ...data,
    country: e.target.value
  }
  console.log(data)
  select()
  setPrice()
})

const selectLevel = document.getElementById('select-level') 
selectLevel.addEventListener('change', (e)=>{
  data={
    ...data,
    level: e.target.value
  }
  console.log(data)
  select()
  setPrice()
})
