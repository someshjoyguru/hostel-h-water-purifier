// JavaScript code to open the default email client with a new email
document.querySelector('#Director').addEventListener('click', function() {
    // Replace 'yourEmailAddress' with the actual Gmail address
    var emailAddress = 'director@nitjsr.ac.in';
    var subject = "Urgent Complaint Regarding Inadequate Water Facilities in Hostel H";
    var body = `
Dear Director Sir,

I hope this message finds you in good health and high spirits.
We are currently experiencing a water shortage in Hostel H, primarily due to the infrequent availability of water from our mess facilities. This situation has led to significant inconvenience, particularly exacerbated by the peak summer conditions and the impending examination period. We respectfully petition the director to consider the installation of a water cooler specifically designated for Hostel H, thereby alleviating this pressing issue.
Even after repeated applications and complains to respective position holder the situation remains the same.

We request you to take the matter seriously and do the needful.

Thank you
Your sincerely
HOSTEL H
`;
    
    
    
    // Create the mailto link
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body);
    // Open the default email client
    window.location.href = mailtoLink;
});
