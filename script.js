document.getElementById("fakeLoginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  // Get entered credentials
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
   const phone = document.getElementById("phone").value.trim();
   const address = document.getElementById("address").value.trim();
   const gender = document.getElementById("gender").value.trim();

  // Simulate "harvesting" (education only)
  const output = `
    <div class="alert alert-warning text-start">
      <strong>⚠️ In a real phishing attack, this data would typically be sent to a remote database or emailed directly to the attacker (threat actor).</strong><br>
      <strong>username:</strong> ${username || "<empty>"}<br>
      <strong>Password:</strong> ${password || "<empty>"}<br>
       <strong>Email:</strong> ${email || "<empty>"}<br>
        <strong>Phone:</strong> ${phone || "<empty>"}<br>
         <strong>Address:</strong> ${address || "<empty>"}<br>
          <strong>Gender:</strong> ${gender || "<empty>"}<br><br>
      <em>NOTE: This is a demo. No data is stored or transmitted.</em>
    </div>
  `;

  // Show the output on screen
  document.getElementById("output").innerHTML = output;

  // Log to browser console
  console.warn("Simulated credential harvesting:");
  console.log({ username, email, phone, address, gender, password });
});
