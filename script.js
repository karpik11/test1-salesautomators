'use strict';

async function submitForm() {
  const data = {
    first_name: document.getElementById('firstName').value,
    last_name: document.getElementById('lastName').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    job_type: document.getElementById('jobType').value,
    job_source: document.getElementById('jobSource').value,
    job_description: document.getElementById('jobDescription').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    zip_code: document.getElementById('zipCode').value,
    area: document.getElementById('area').value,
    start_date: document.getElementById('startDate').value,
    start_time: document.getElementById('startTime').value,
    end_time: document.getElementById('endTime').value,
    test_select: document.getElementById('testSelect').value
  };

  const response = await fetch('https://api.pipedrive.com/v1/deals?api_token=39f7d61ddc010077e3adc1ec0111939a64e08192', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  // if (response.ok) {
  //   alert('Deal created successfully!');
  // } else {
  //   alert('Error creating deal');
  // }
}