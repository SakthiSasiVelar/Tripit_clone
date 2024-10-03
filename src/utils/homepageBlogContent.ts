import ZoomPhone from '../assets/Images/Blog-ZoomPhone.png';
import Building from '../assets/Images/Blog-Building.png';
import Phone from '../assets/Images/Blog-Phone.png'
import { BlogType } from '../Types/common';


export const contents : BlogType[]= [
    {
        id : 1,
        title : 'New Search Tool Added for Locating Trip Details in TripIt for iOS',
        description : 'With a few keywords, you can now search within your travel plans (past and upcoming) to find trip details.',
        image : ZoomPhone,
        imageDescription : 'zooming in on phone screen',
        path : '/free'
    },
    {
        id : 2,
        title : 'City Break: Manhattan',
        description : 'In this series from TripIt, we explore some of the world\'s best cities for planning a quick getaway or extending a work trip.',
        image : Building,
        imageDescription : 'skyline of city',
        path : '/free'
    },
    {
        id : 3,
        title : 'New Enhancements for Navigating Travel Based on Your Vaccination Status',
        description : 'Find information about vaccination rates and requirements, approved vaccines, exemptions for vaccinated travelers, and more, right in TripIt’s COVID-19 travel guidance feature.',
        image : Phone,
        imageDescription : 'phone in front of airport',
        path : '/free'
    }
]