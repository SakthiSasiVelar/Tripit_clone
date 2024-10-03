import Phone from '../assets/Images/HomePage-Phone.png'
import Woman from '../assets/Images/HomePage-Woman.svg'
import Nearby from '../assets/Images/HomePage-Nearby.png'
import { ContentType } from '../Types/common'

export const contents : ContentType[]= [
    {
        id:1,
        title : "You handle the booking, we'll take it from there",
        description :  "Unlike other travel apps, TripIt can organize your travel plans no matter where you book. Simply forward your confirmation emails to plans@tripit.com and in a matter of seconds, TripIt will create a comprehensive itinerary for every trip.",
        quote : "\"I'm on the road 100 days a year and TripIt is my go-to-app.It's such a powerful tool in the hands of a traveler. There's simply nothing like it on the planet.\"",
        link : "Learn how it works",
        path : '/free',
        author : "Damen L",
        image : Phone,
        imageDescription : "mobile phone in hand"

    },
    {
        id:2,
        title : "Helpful reminders and alerts so you don't miss a beat",
        description :  "Packed with features that give you a leg up on changes and help you make the most of all your trips, TripIt Pro is where the magic happens.",
        quote : "\"I love knowing exactly when my flights are, when they are delayed, what gate to leave from, and all the other amazing TripIt Pro features.\"",
        link : "Learn all about TripIt Pro",
        path : '/free',
        author : "Ann B",
        image : Woman,
        imageDescription : "woman walking in airport"

    },
    {
        id:3,
        title : "Know where to be and when",
        description :  "Need a reminder when it's time to leave for the airport? Not sure where to eat in the airport or near your hotel? TripIt has you covered.",
        quote : "\"My favorite business travel app so far is TripIt. Carrying all of my itineraries, it saves me during my 'Where am I, what do I do next?'panic attacks.\"",
        link : "Download the TripIt app",
        path : '/free',
        author : "Phil D",
        image : Nearby,
        imageDescription : "person using mobile app"

    }
]