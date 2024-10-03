import Forbes from '../assets/Images/Company-forbes.svg';
import NBC from '../assets/Images/Company-nbc.svg'
import NewYorkTimes from '../assets/Images/Company-newYorkTimes.svg';
import TravelLeisure from '../assets/Images/Company-travelLeisure.svg';
import WallStreetJournal from '../assets/Images/Company-wallStreetJournal.svg';
import { featureCompanyType } from '../Types/common';


export const featureCompanies : featureCompanyType[] = [
    {
        image:NewYorkTimes,
        imageDescription:'New York Times'
    },
    {
        image:Forbes,
        imageDescription : 'Forbes'
    },
    {
        image:NBC,
        imageDescription:'NBC'
    },
    {
        image:WallStreetJournal,
        imageDescription:'Wall Street Journal'
    },
    {
        image:TravelLeisure,
        imageDescription:'Travel Leisure'
    }

]