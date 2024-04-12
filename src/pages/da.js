// src/data.js
import sample1 from '../images/Samplepdf.pdf';
import sample2 from '../images/Samplepdf.pdf';

export const sampleData = [
    { id: 1, sector: 'Trade', region: 'Ethiopia', year: 2018, title: "Economy", downloadLink: sample1, isFree: true },
    { id: 2, sector: 'Economy', region: 'Other', year: 2019, title: "capital market of Ethiopia", downloadLink: sample2, isFree: false },
    { id: 3, sector: 'Investment', region: 'Ethiopia', year: 2020, title: "Abebe beso bela", downloadLink: sample2, isFree: false },
    { id: 4, sector: 'Social', region: 'Ethiopia', year: 2021, title: "capital economy of Ethiopia", downloadLink: sample2, isFree: false },
    { id: 5, sector: 'Infrastructure', region: 'Other', year: 2022, title: "Ethiopia", downloadLink: sample2, isFree: false },
    { id: 6, sector: 'Market', region: 'Other', year: 2022, title: "Ethiopia", downloadLink: sample2, isFree: false },
    { id: 7, sector: 'Economy', region: 'Other', year: 2019, title: "Market of Ethiopia", downloadLink: sample2, isFree: false },
    // Add more data as needed
  ];
  