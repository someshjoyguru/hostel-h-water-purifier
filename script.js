// JavaScript code to open the default email client with a new email
document.querySelector('#Director').addEventListener('click', function() {
    // Replace 'yourEmailAddress' with the actual Gmail address
    var emailAddress = 'director@nitjsr.ac.in';
    var subject = "Urgent Complaint Regarding Inadequate Water Facilities in Hostel and Mess.";
    var body = `
Dear Director Sir,

I hope this message finds you in good health and high spirits.
Sir, In Hostel K, which houses over 700+ students, there is only a single functional water filter available. This dire situation has persisted since our relocation to this hostel last year, significantly impacting the daily lives of the residents.

Furthermore, within the mega mess, there are four water filters allocated to serve the students. Regrettably, only two of them are in operational condition, and even those experience intermittent failures. This results in severe inconvenience during meal times.

Many students are forced to buy drinking water from different water vendors at Hostel gate. Several complaints were made earlier but no prompt actions has been taken so far.

Sir, it is our sincere demand to provide us standard water purifier in each block of the Hostel K.
I request your immediate intervention in this matter to rectify the situation and provide a satisfactory resolution.
I appreciate your attention to this matter and look forward to a timely response. Thank you for your consideration.
 
Thank you.
`;
    
    
    
    // Create the mailto link
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body);
    // Open the default email client
    window.location.href = mailtoLink;
});