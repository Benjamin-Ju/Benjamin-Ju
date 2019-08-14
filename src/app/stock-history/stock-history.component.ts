import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {

  constructor() { }

  trades = [
    {
      "date": "11/08/2018",
      "symbol": "HTL",
      "position": "B",
      "quantity": "555",
      "price": "0.91",
      "result": ""
    },
    {
      "date": "13/07/2018",
      "symbol": "ECI",
      "position": "B",
      "quantity": "54",
      "price": "18.77",
      "result": ""
    },
    {
      "date": "18/07/2018",
      "symbol": "MFI",
      "position": "B",
      "quantity": "27",
      "price": "34.54",
      "result": ""
    },
    {
      "date": "24/07/2018",
      "symbol": "MFI",
      "position": "B",
      "quantity": "30",
      "price": "32.90",
      "result": ""
    },
    {
      "date": "31/07/2018",
      "symbol": "MFI",
      "position": "S",
      "quantity": "57",
      "price": "30.87",
      "result": "-179.99CAD loss"
    },
    {
      "date": "01/08/2018",
      "symbol": "ECI",
      "position": "S",
      "quantity": "54",
      "price": "28.86",
      "result": "+524.86CAD gain"
    },
    {
      "date": "08/08/2018",
      "symbol": "WEED",
      "position": "B",
      "quantity": "28",
      "price": "35.55",
      "result": ""
    },
    {
      "date": "08/08/2018",
      "symbol": "ACB",
      "position": "B",
      "quantity": "157",
      "price": "6.36",
      "result": ""
    },
    {
      "date": "09/08/2018",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "31",
      "price": "47.265",
      "result": ""
    },
    {
      "date": "13/08/2018",
      "symbol": "TSGI",
      "position": "S",
      "quantity": "31",
      "price": "41.76",
      "result": "-170.66CAD loss"
    },
    {
      "date": "13/08/2018",
      "symbol": "MFI",
      "position": "B",
      "quantity": "36",
      "price": "36.90",
      "result": ""
    },
    {
      "date": "14/08/2018",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "39",
      "price": "38.26",
      "result": ""
    },
    {
      "date": "16/08/2018",
      "symbol": "HTL",
      "position": "S",
      "quantity": "555",
      "price": "1.08",
      "result": "+79.90CAD gain"
    },
    {
      "date": "20/08/2018",
      "symbol": "ACB",
      "position": "B",
      "quantity": "84",
      "price": "7.10",
      "result": ""
    },
    {
      "date": "27/08/2018",
      "symbol": "MFI",
      "position": "S",
      "quantity": "36",
      "price": "31.49",
      "result": "+9.88CAD gain"
    },
    {
      "date": "27/08/2018",
      "symbol": "WEED",
      "position": "S",
      "quantity": "28",
      "price": "61.74",
      "result": "+713.32CAD gain"
    },
    {
      "date": "28/08/2018",
      "symbol": "ACB",
      "position": "S",
      "quantity": "241",
      "price": "8.45",
      "result": "+421.53CAD gain"
    },
    {
      "date": "10/09/2018",
      "symbol": "ACB",
      "position": "B",
      "quantity": "150",
      "price": "8.24",
      "result": ""
    },
    {
      "date": "11/09/2018",
      "symbol": "ACB",
      "position": "S",
      "quantity": "150",
      "price": "8.98",
      "result": "+91.00CAD gain"
    },
    {
      "date": "08/02/2019",
      "symbol": "AMZN",
      "position": "B",
      "quantity": "1",
      "price": "1 575.79",
      "result": ""
    },
    {
      "date": "08/02/2019",
      "symbol": "BABA",
      "position": "B",
      "quantity": "6",
      "price": "164.60",
      "result": ""
    },
    {
      "date": "14/02/2019",
      "symbol": "WEED",
      "position": "B",
      "quantity": "24",
      "price": "59.81",
      "result": ""
    },
    {
      "date": "14/02/2019",
      "symbol": "WEED",
      "position": "S",
      "quantity": "24",
      "price": "61.27",
      "result": "+15.04CAD gain"
    },
    {
      "date": "14/02/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "159",
      "price": "9.37",
      "result": ""
    },
    {
      "date": "15/02/2019",
      "symbol": "ACB",
      "position": "S",
      "quantity": "159",
      "price": "9.36",
      "result": "-21.59CAD loss"
    },
    {
      "date": "15/02/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "300",
      "price": "9.37",
      "result": ""
    },
    {
      "date": "25/02/2019",
      "symbol": "BABA",
      "position": "S",
      "quantity": "6",
      "price": "182.86",
      "result": "+99.56USD gain"
    },
    {
      "date": "25/02/2019",
      "symbol": "ACB",
      "position": "S",
      "quantity": "300",
      "price": "9.4567",
      "result": "+6.01CAD gain"
    },
    {
      "date": "06/03/2019",
      "symbol": "TGOD",
      "position": "B",
      "quantity": "500",
      "price": "4.52",
      "result": ""
    },
    {
      "date": "07/03/2019",
      "symbol": "BABA",
      "position": "B",
      "quantity": "6",
      "price": "180.79",
      "result": ""
    },
    {
      "date": "20/03/2019",
      "symbol": "TGOD",
      "position": "B",
      "quantity": "90",
      "price": "5.14",
      "result": ""
    },
    {
      "date": "20/03/2019",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "20",
      "price": "22.39",
      "result": ""
    },
    {
      "date": "20/03/2019",
      "symbol": "TSGI",
      "position": "S",
      "quantity": "20",
      "price": "22.6628",
      "result": "+5.46CAD gain"
    },
    {
      "date": "22/03/2019",
      "symbol": "TGOD",
      "position": "S",
      "quantity": "590",
      "price": "4.85",
      "result": "+108.9CAD gain"
    },
    {
      "date": "22/03/2019",
      "symbol": "AMZN",
      "position": "S",
      "quantity": "1",
      "price": "1 778.82",
      "result": "+193.03USD gain"
    },
    {
      "date": "22/03/2019",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "20",
      "price": "23.9792",
      "result": ""
    },
    {
      "date": "22/03/2019",
      "symbol": "TSGI",
      "position": "S",
      "quantity": "20",
      "price": "23.5153",
      "result": "-9.27CAD loss"
    },
    {
      "date": "22/03/2019",
      "symbol": "BABA",
      "position": "S",
      "quantity": "6",
      "price": "176.79",
      "result": "-34.00USD loss"
    },
    {
      "date": "29/04/2019",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "18",
      "price": "25.36",
      "result": ""
    },
    {
      "date": "29/04/2019",
      "symbol": "TSLA",
      "position": "B",
      "quantity": "6",
      "price": "241.59",
      "result": ""
    },
    {
      "date": "07/05/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "170",
      "price": "11.69",
      "result": ""
    },
    {
      "date": "07/05/2019",
      "symbol": "TGOD",
      "position": "B",
      "quantity": "465",
      "price": "4.30",
      "result": ""
    },
    {
      "date": "09/05/2019",
      "symbol": "TSGI",
      "position": "S",
      "quantity": "18",
      "price": "27.0907",
      "result": "+31.15CAD gain"
    },
    {
      "date": "09/05/2019",
      "symbol": "TGOD",
      "position": "B",
      "quantity": "500",
      "price": "4.14",
      "result": ""
    },
    {
      "date": "13/05/2019",
      "symbol": "BABA",
      "position": "B",
      "quantity": "9",
      "price": "171.90",
      "result": ""
    },
    {
      "date": "16/05/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "40",
      "price": "11.52",
      "result": ""
    },
    {
      "date": "16/05/2019",
      "symbol": "ACB",
      "position": "S",
      "quantity": "40",
      "price": "11.7302",
      "result": "+8.41CAD gain"
    },
    {
      "date": "17/05/2019",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "20",
      "price": "24.3171",
      "result": ""
    },
    {
      "date": "17/05/2019",
      "symbol": "TSGI",
      "position": "S",
      "quantity": "20",
      "price": "24.3171",
      "result": "-4.65CAD loss"
    },
    {
      "date": "17/05/2019",
      "symbol": "TSLA",
      "position": "S",
      "quantity": "6",
      "price": "219.61",
      "result": "-131.88USD loss"
    },
    {
      "date": "17/05/2019",
      "symbol": "ACB",
      "position": "S",
      "quantity": "170",
      "price": "12.05",
      "result": "+41.20CAD gain"
    },
    {
      "date": "22/05/2019",
      "symbol": "TGOD",
      "position": "S",
      "quantity": "500",
      "price": "4.22",
      "result": "+20.00CAD gain"
    },
    {
      "date": "23/05/2019",
      "symbol": "BABA",
      "position": "B",
      "quantity": "8",
      "price": "155.04",
      "result": ""
    },
    {
      "date": "23/05/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "200",
      "price": "11.09",
      "result": ""
    },
    {
      "date": "23/05/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "43",
      "price": "11.18",
      "result": ""
    },
    {
      "date": "23/05/2019",
      "symbol": "ACB",
      "position": "S",
      "quantity": "43",
      "price": "11.13",
      "result": "-2.15CAD loss"
    },
    {
      "date": "23/05/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "13",
      "price": "11.12",
      "result": ""
    },
    {
      "date": "24/05/2019",
      "symbol": "ACB",
      "position": "S",
      "quantity": "13",
      "price": "11.24",
      "result": "+1.56CAD gain"
    },
    {
      "date": "24/05/2019",
      "symbol": "SHOP",
      "position": "B",
      "quantity": "1",
      "price": "365.34",
      "result": ""
    },
    {
      "date": "24/05/2019",
      "symbol": "SHOP",
      "position": "S",
      "quantity": "1",
      "price": "369.00",
      "result": "+3.66CAD gain"
    },
    {
      "date": "24/05/2019",
      "symbol": "ACB",
      "position": "S",
      "quantity": "200",
      "price": "11.28",
      "result": "+20.00CAD gain"
    },
    {
      "date": "24/05/2019",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "22",
      "price": "22.79",
      "result": ""
    },
    {
      "date": "24/05/2019",
      "symbol": "TSGI",
      "position": "S",
      "quantity": "22",
      "price": "22.56",
      "result": "-5.06CAD loss"
    },
    {
      "date": "29/05/2019",
      "symbol": "TGOD",
      "position": "B",
      "quantity": "500",
      "price": "3.88",
      "result": ""
    },
    {
      "date": "29/05/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "45",
      "price": "10.98",
      "result": ""
    },
    {
      "date": "30/05/2019",
      "symbol": "BABA",
      "position": "S",
      "quantity": "17",
      "price": "150.47",
      "result": "-234.24USD loss"
    },
    {
      "date": "30/05/2019",
      "symbol": "ACB",
      "position": "S",
      "quantity": "45",
      "price": "10.82",
      "result": "-7.20CAD loss"
    },
    {
      "date": "30/05/2019",
      "symbol": "TGOD",
      "position": "S",
      "quantity": "965",
      "price": "3.75",
      "result": "-330.75CAD loss"
    },
    {
      "date": "05/06/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "45",
      "price": "10.33",
      "result": ""
    },
    {
      "date": "10/06/2019",
      "symbol": "ACB",
      "position": "S",
      "quantity": "45",
      "price": "10.36",
      "result": "+1.35CAD gain"
    },
    {
      "date": "10/06/2019",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "22",
      "price": "22.45",
      "result": ""
    },
    {
      "date": "10/06/2019",
      "symbol": "TSGI",
      "position": "S",
      "quantity": "22",
      "price": "22.38",
      "result": "-1.54CAD loss"
    },
    {
      "date": "12/06/2019",
      "symbol": "PLAY",
      "position": "B",
      "quantity": "50",
      "price": "40.79",
      "result": ""
    },
    {
      "date": "13/06/2019",
      "symbol": "PLAY",
      "position": "S",
      "quantity": "50",
      "price": "40.32",
      "result": "-23.50USD loss"
    },
    {
      "date": "20/06/2019",
      "symbol": "ACB",
      "position": "B",
      "quantity": "200",
      "price": "10.08",
      "result": "Currently at a -276CAD loss"
    },
    {
      "date": "20/06/2019",
      "symbol": "TGOD",
      "position": "B",
      "quantity": "500",
      "price": "3.33",
      "result": "Currently at a +115CAD gain"
    },
    {
      "date": "21/06/2019",
      "symbol": "WEED",
      "position": "B",
      "quantity": "9",
      "price": "52.98",
      "result": ""
    },
    {
      "date": "18/07/2019",
      "symbol": "WEED",
      "position": "B",
      "quantity": "9",
      "price": "46.95",
      "result": "-54.27CAD loss"
    },
    {
      "date": "18/07/2019",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "20",
      "price": "20.859",
      "result": "Currently at a -73.98CAD loss"
    },
    {
      "date": "12/08/2019",
      "symbol": "TSGI",
      "position": "B",
      "quantity": "80",
      "price": "18.65",
      "result": "Currently at a -119.59CAD loss"
    },
  ]

  ngOnInit() {
  }

}
