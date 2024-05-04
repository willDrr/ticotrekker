<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $date = $_POST['date'];
        $pickup = $_POST['pickup'];
        $dropoff = $_POST['dropoff'];
        $adults = $_POST['adults'];
        $children = $_POST['children'];
        $roundTrip = $_POST['roundTrip'];
        $contact = $_POST['contact'];

        // Add your email-sending logic here
        $to = 'info@ticotrekker.com';
        $subject = 'Form Submission';
        $message = "Date: $date\nPickup: $pickup\nDropoff: $dropoff\nAdults: $adults\nChildren: $children\nRound Trip: $roundTrip\nContact: $contact";

        // Send the email
        if (mail($to, $subject, $body)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } else {
        echo "Access denied!";
    }
?>
