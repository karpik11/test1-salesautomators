'use strict'

$(document).ready(function () {
  $('#dealForm').submit(function (event) {
    event.preventDefault();

    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const phone = $('#phone').val();
    const email = $('#email').val();
    const jobType = $('#jobType').val();
    const jobSource = $('#jobSource').val();
    const jobDescription = $('#jobDescription').val();
    const address = $('#address').val();
    const city = $('#city').val();
    const state = $('#state').val();
    const zipCode = $('#zipCode').val();
    const area = $('#area').val();
    const startDate = $('#startDate').val();
    const startTime = $('#startTime').val();
    const endTime = $('#endTime').val();
    const testSelect = $('#testSelect').val();
    const dealId = 3;

    $.ajax({
      url: `https://api.pipedrive.com/v1/deals/${dealId}?api_token=bc761f15df4310d357ab3e90ecff397b7b20021f`,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({

        "6ede13b871449bff49086658859194ee61090ddb": firstName,
        "f703b5a9f5c7df91d9069af489b45723cfd3e009": lastName,
        "7c30d180c6383f4aa851ec700c64e3318d87f7e2": phone,
        "97c331443e88bfa7211c8e83e20b6abdf71d2b57": email,
        "7b9e6516fa2ea636e52da831c0c7a2899852f9aa": jobType,
        "81e2138a65fc90393917c06a2dbd2da02d3aabd8": jobSource,
        "bc0eadfdef1d74db0e863a91896642d98c605a36": jobDescription,
        "a12fe72fbe5a6d0cac017e1be3436d6cdf72a072": address,
        "3f32b605b09f97d99c00adef5e2d5950d654144b": city,
        "1f0393b84ec021b3c49c0ed438664104f7ea8e7b": state,
        "47af53c284ae27764f6882e73a0e8e545ca30407": zipCode,
        "b91b347aa2ed4fa4cb7f6a4f14db3a15214148b6": area,
        "e061e6a0eebbe8887c8588731ae37d079aa347f0": startDate,
        "70ff2ef43fc5b804259eb935f443979e371d21c9": startTime,
        "0819168a3f666676e50f10f1e43264f5d74a0e28": endTime,
        "42166328a7392a8c6267594fd084690d2833e46b": testSelect,

      }),
      success: function (response) {
        alert('Job is created');

        $('#dealForm')[0].reset();
      },
      error: function (xhr) {
        alert('Error: ' + xhr.responseText);
      }
    });
  });
});
