const BASE_TXS = [{"id":1,"date":"2026-03-23","type":"gasto","amount":8.67,"category":"Otros","description":"Bizum a Paula Maestre Pizarro"},{"id":2,"date":"2026-03-23","type":"ingreso","amount":44.95,"category":"Otros","description":"Devolución Amazon T198l02n5"},{"id":3,"date":"2026-03-23","type":"gasto","amount":6.83,"category":"Alimentación","description":"Condis Barcelona"},{"id":4,"date":"2026-03-22","type":"gasto","amount":10.0,"category":"Restaurantes","description":"Almodo Bar Barcelona"},{"id":5,"date":"2026-03-22","type":"gasto","amount":15.0,"category":"Restaurantes","description":"Almodobar Barcelona"},{"id":6,"date":"2026-03-21","type":"gasto","amount":15.65,"category":"Restaurantes","description":"Picoteo Sant Vicenz"},{"id":7,"date":"2026-03-21","type":"gasto","amount":10.5,"category":"Alimentación","description":"Supermercado Barcelona"},{"id":8,"date":"2026-03-21","type":"gasto","amount":12.0,"category":"Otros","description":"Bizum a Guido Nicolas Resch"},{"id":9,"date":"2026-03-21","type":"gasto","amount":2.75,"category":"Alimentación","description":"Auto Servicio Vicenz Montales"},{"id":10,"date":"2026-03-21","type":"gasto","amount":18.28,"category":"Restaurantes","description":"Zia Carolina Barcelona"},{"id":11,"date":"2026-03-20","type":"gasto","amount":2.8,"category":"Alimentación","description":"Comercial ICI Barcelona"},{"id":12,"date":"2026-03-20","type":"gasto","amount":3.5,"category":"Restaurantes","description":"Noor Holding SL Barcelona"},{"id":13,"date":"2026-03-20","type":"gasto","amount":7.45,"category":"Restaurantes","description":"Gode Coffee Barcelona"},{"id":14,"date":"2026-03-19","type":"gasto","amount":13.9,"category":"Salud","description":"Farmacia M Del Mar Barcelona"},{"id":15,"date":"2026-03-19","type":"gasto","amount":15.9,"category":"Salud","description":"Farmacia M Del Mar Barcelona"},{"id":16,"date":"2026-03-19","type":"gasto","amount":19.0,"category":"Otros","description":"Bizum a Adan Santiago Burbano"},{"id":17,"date":"2026-03-19","type":"gasto","amount":4.4,"category":"Restaurantes","description":"Paul Sant Frances"},{"id":18,"date":"2026-03-19","type":"gasto","amount":8.15,"category":"Restaurantes","description":"Gode Coffee Barcelona"},{"id":19,"date":"2026-03-19","type":"gasto","amount":3.69,"category":"Restaurantes","description":"Not Jesus Benav Barcelona"},{"id":20,"date":"2026-03-19","type":"ingreso","amount":7.5,"category":"Otros","description":"Bizum de Alfredo Luis Berca - Taxi"},{"id":21,"date":"2026-03-18","type":"ingreso","amount":7.5,"category":"Otros","description":"Bizum de Sebastian Ariel Idesis"},{"id":22,"date":"2026-03-18","type":"gasto","amount":23.1,"category":"Transporte","description":"Taxi Llic 7871 Barcelona"},{"id":23,"date":"2026-03-18","type":"gasto","amount":0.03,"category":"Otros","description":"Liquidación Contrato"},{"id":24,"date":"2026-03-17","type":"gasto","amount":35.71,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":25,"date":"2026-03-17","type":"gasto","amount":81.17,"category":"Otros","description":"Amazon Rm1jw8ua5"},{"id":26,"date":"2026-03-16","type":"gasto","amount":2.85,"category":"Restaurantes","description":"Masovera Barcelona"},{"id":27,"date":"2026-03-16","type":"gasto","amount":1.75,"category":"Restaurantes","description":"Bar Tossa Barcelona"},{"id":28,"date":"2026-03-16","type":"gasto","amount":44.95,"category":"Otros","description":"Amazon T198l02n5"},{"id":29,"date":"2026-03-16","type":"gasto","amount":36.76,"category":"Otros","description":"Amazon 0z1zf4ad5"},{"id":30,"date":"2026-03-16","type":"gasto","amount":5.88,"category":"Alimentación","description":"Condis Barcelona"},{"id":31,"date":"2026-03-15","type":"gasto","amount":1.75,"category":"Restaurantes","description":"New Home Gran Via Barcelona"},{"id":32,"date":"2026-03-15","type":"gasto","amount":0.85,"category":"Ocio","description":"Estanc Entena Barcelona"},{"id":33,"date":"2026-03-15","type":"gasto","amount":2.99,"category":"Alimentación","description":"Don Jaime Market Castellon"},{"id":34,"date":"2026-03-15","type":"gasto","amount":2.5,"category":"Ocio","description":"Gin & Vin Castellon"},{"id":35,"date":"2026-03-14","type":"gasto","amount":7.9,"category":"Alimentación","description":"Panaderia 365 Castellon"},{"id":36,"date":"2026-03-14","type":"gasto","amount":15.0,"category":"Alimentación","description":"Coop. Oleicola Viver"},{"id":37,"date":"2026-03-14","type":"gasto","amount":6.0,"category":"Restaurantes","description":"Rte El Sarao Castellon"},{"id":38,"date":"2026-03-14","type":"gasto","amount":14.0,"category":"Ocio","description":"Gaiata 11 Burriana"},{"id":39,"date":"2026-03-14","type":"gasto","amount":6.8,"category":"Ocio","description":"Estanco CS N5 Ausias March"},{"id":40,"date":"2026-03-13","type":"gasto","amount":13.0,"category":"Restaurantes","description":"Bar Rincon Arge Barcelona"},{"id":41,"date":"2026-03-13","type":"gasto","amount":3.94,"category":"Restaurantes","description":"Not Jesus Benav Barcelona"},{"id":42,"date":"2026-03-13","type":"gasto","amount":60.22,"category":"Suscripciones","description":"Vodafone Servicios"},{"id":43,"date":"2026-03-12","type":"gasto","amount":16.5,"category":"Hogar","description":"Bazar Hong Lian Barcelona"},{"id":44,"date":"2026-03-12","type":"gasto","amount":5.2,"category":"Restaurantes","description":"Gode Coffee Barcelona"},{"id":45,"date":"2026-03-12","type":"gasto","amount":2.6,"category":"Alimentación","description":"Comercial ICI Barcelona"},{"id":46,"date":"2026-03-11","type":"gasto","amount":4.97,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":47,"date":"2026-03-10","type":"gasto","amount":8.59,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":48,"date":"2026-03-10","type":"gasto","amount":1.9,"category":"Restaurantes","description":"Iaia Nita SL Barcelona"},{"id":49,"date":"2026-03-10","type":"gasto","amount":12.15,"category":"Alimentación","description":"Bon Preu Barcelona"},{"id":50,"date":"2026-03-10","type":"gasto","amount":46.79,"category":"Otros","description":"Amazon Ln8191bb5"},{"id":51,"date":"2026-03-10","type":"gasto","amount":7.2,"category":"Alimentación","description":"Mercadona Poble Barcelona"},{"id":52,"date":"2026-03-09","type":"gasto","amount":5.5,"category":"Restaurantes","description":"Dellaostia Barcelona"},{"id":53,"date":"2026-03-09","type":"gasto","amount":16.0,"category":"Restaurantes","description":"Picoteo Sant Vicenz"},{"id":54,"date":"2026-03-09","type":"ingreso","amount":40.72,"category":"Otros","description":"Devolución Amazon Fl98v7sw5"},{"id":55,"date":"2026-03-08","type":"gasto","amount":2.8,"category":"Hogar","description":"Bazar Rambla Barcelona"},{"id":56,"date":"2026-03-08","type":"gasto","amount":7.95,"category":"Restaurantes","description":"Pausa by Mezza Barcelona"},{"id":57,"date":"2026-03-08","type":"gasto","amount":7.77,"category":"Alimentación","description":"Muy Mucho Frute Badalona"},{"id":58,"date":"2026-03-07","type":"gasto","amount":20.42,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":59,"date":"2026-03-07","type":"gasto","amount":2.49,"category":"Ropa","description":"Gran Via 1024 Textil"},{"id":60,"date":"2026-03-07","type":"gasto","amount":5.99,"category":"Ropa","description":"Lefties Barcelona"},{"id":61,"date":"2026-03-07","type":"gasto","amount":12.8,"category":"Restaurantes","description":"Rooq Valencia"},{"id":62,"date":"2026-03-06","type":"gasto","amount":2.95,"category":"Restaurantes","description":"Gode Coffee Barcelona"},{"id":63,"date":"2026-03-06","type":"gasto","amount":2.25,"category":"Alimentación","description":"Supermercado 11 Barcelona"},{"id":64,"date":"2026-03-06","type":"gasto","amount":23.92,"category":"Ropa","description":"Alcampo Diagonal Textil"},{"id":65,"date":"2026-03-06","type":"gasto","amount":15.14,"category":"Hogar","description":"Interkits Diagonal"},{"id":66,"date":"2026-03-05","type":"gasto","amount":15.35,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":67,"date":"2026-03-05","type":"gasto","amount":3.8,"category":"Restaurantes","description":"Das Cafe Barcelona"},{"id":68,"date":"2026-03-05","type":"gasto","amount":14.15,"category":"Ocio","description":"Casa del Libro Madrid"},{"id":69,"date":"2026-03-03","type":"gasto","amount":2.59,"category":"Alimentación","description":"Casa Ametller Barcelona"},{"id":70,"date":"2026-03-03","type":"gasto","amount":40.72,"category":"Otros","description":"Amazon Fl98v7sw5"},{"id":71,"date":"2026-03-02","type":"gasto","amount":3.41,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":72,"date":"2026-03-02","type":"gasto","amount":3.45,"category":"Restaurantes","description":"Demasie Glories Barcelona"},{"id":73,"date":"2026-03-02","type":"gasto","amount":33.3,"category":"Hogar","description":"Alquiler piso (Stefania)"},{"id":74,"date":"2026-03-02","type":"gasto","amount":549.0,"category":"Hogar","description":"Alquiler piso (Stefania)"},{"id":75,"date":"2026-03-02","type":"gasto","amount":30.0,"category":"Otros","description":"Bizum a Alessia Derossi"},{"id":76,"date":"2026-03-02","type":"gasto","amount":1.0,"category":"Hogar","description":"Alquiler piso (Stefania)"},{"id":77,"date":"2026-03-02","type":"gasto","amount":57.59,"category":"Hogar","description":"Bac de Roda Sport - Gimnasio"},{"id":78,"date":"2026-03-01","type":"gasto","amount":6.17,"category":"Alimentación","description":"Supermercado 11 Barcelona"},{"id":79,"date":"2026-03-01","type":"gasto","amount":43.0,"category":"Restaurantes","description":"Restaurante Cev Barcelona"},{"id":80,"date":"2026-02-28","type":"gasto","amount":12.0,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":81,"date":"2026-02-28","type":"gasto","amount":6.27,"category":"Alimentación","description":"Condis Barcelona"},{"id":82,"date":"2026-02-28","type":"gasto","amount":83.12,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":83,"date":"2026-02-28","type":"ingreso","amount":1599.8,"category":"Trabajo","description":"Nómina Sia Interactive 02/2026"},{"id":84,"date":"2026-02-27","type":"gasto","amount":4.07,"category":"Otros","description":"Amazon Y03pq4uc5"},{"id":85,"date":"2026-02-26","type":"gasto","amount":1.8,"category":"Hogar","description":"Bazar Rbla Pobl"},{"id":86,"date":"2026-02-26","type":"gasto","amount":10.53,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":87,"date":"2026-02-26","type":"gasto","amount":21.78,"category":"Suscripciones","description":"Claude.AI Subscription"},{"id":88,"date":"2026-02-25","type":"gasto","amount":3.97,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":89,"date":"2026-02-25","type":"gasto","amount":2.09,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":90,"date":"2026-02-25","type":"gasto","amount":5.35,"category":"Restaurantes","description":"Gode Coffee Barcelona"},{"id":91,"date":"2026-02-24","type":"gasto","amount":5.8,"category":"Restaurantes","description":"Anita Helado Barcelona"},{"id":92,"date":"2026-02-24","type":"gasto","amount":48.32,"category":"Ropa","description":"Alcampo Diagonal Textil"},{"id":93,"date":"2026-02-24","type":"gasto","amount":21.97,"category":"Ropa","description":"Decathlon Diagonal"},{"id":94,"date":"2026-02-24","type":"gasto","amount":28.75,"category":"Ropa","description":"Glories Barcelona"},{"id":95,"date":"2026-02-24","type":"gasto","amount":4.5,"category":"Restaurantes","description":"Blackbird Coffee Barcelona"},{"id":96,"date":"2026-02-24","type":"gasto","amount":10.58,"category":"Alimentación","description":"Condis Barcelona"},{"id":97,"date":"2026-02-23","type":"gasto","amount":20.46,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":98,"date":"2026-02-23","type":"gasto","amount":26.35,"category":"Restaurantes","description":"Las Ramblas Barcelona"},{"id":99,"date":"2026-02-23","type":"gasto","amount":4.4,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":100,"date":"2026-02-23","type":"gasto","amount":11.57,"category":"Alimentación","description":"Condis Barcelona"},{"id":101,"date":"2026-02-22","type":"gasto","amount":4.5,"category":"Restaurantes","description":"Badiani Glorias Barcelona"},{"id":102,"date":"2026-02-22","type":"gasto","amount":1.6,"category":"Restaurantes","description":"Bar Carmelo Barcelona"},{"id":103,"date":"2026-02-22","type":"gasto","amount":15.54,"category":"Ocio","description":"Firo Sensacione Barcelona"},{"id":104,"date":"2026-02-22","type":"gasto","amount":35.5,"category":"Restaurantes","description":"Pink Buda Barcelona"},{"id":105,"date":"2026-02-21","type":"gasto","amount":80.2,"category":"Restaurantes","description":"Buenos Brasas Barcelona"},{"id":106,"date":"2026-02-21","type":"gasto","amount":9.0,"category":"Restaurantes","description":"The Botanist Barcelona"},{"id":107,"date":"2026-02-21","type":"gasto","amount":19.2,"category":"Ocio","description":"Glac Verdi Barcelona"},{"id":108,"date":"2026-02-21","type":"gasto","amount":11.95,"category":"Ocio","description":"Cia Central Lli Barcelona"},{"id":109,"date":"2026-02-21","type":"gasto","amount":13.9,"category":"Restaurantes","description":"Amiko Gelato Barcelona"},{"id":110,"date":"2026-02-21","type":"gasto","amount":31.05,"category":"Restaurantes","description":"Taller de Tapas Barcelona"},{"id":111,"date":"2026-02-21","type":"gasto","amount":27.2,"category":"Ocio","description":"Surprise Box Barcelona"},{"id":112,"date":"2026-02-21","type":"gasto","amount":2.56,"category":"Restaurantes","description":"Turris Poblenou Barcelona"},{"id":113,"date":"2026-02-21","type":"gasto","amount":11.15,"category":"Alimentación","description":"365 T83"},{"id":114,"date":"2026-02-20","type":"gasto","amount":9.85,"category":"Transporte","description":"Taxi Llic 5092 Barcelona"},{"id":115,"date":"2026-02-20","type":"gasto","amount":16.2,"category":"Restaurantes","description":"Bar Centric Barcelona"},{"id":116,"date":"2026-02-20","type":"gasto","amount":6.75,"category":"Alimentación","description":"Supermercado Barcelona"},{"id":117,"date":"2026-02-20","type":"gasto","amount":4.1,"category":"Restaurantes","description":"Brooklyn Cafe Barcelona"},{"id":118,"date":"2026-02-20","type":"gasto","amount":7.2,"category":"Restaurantes","description":"Alfar Medialunas Barcelona"},{"id":119,"date":"2026-02-20","type":"gasto","amount":9.5,"category":"Salud","description":"Farmacia M Del Mar Barcelona"},{"id":120,"date":"2026-02-20","type":"gasto","amount":3.9,"category":"Restaurantes","description":"Gode Coffee Barcelona"},{"id":121,"date":"2026-02-19","type":"gasto","amount":14.99,"category":"Otros","description":"Amazon h20xm80m5"},{"id":122,"date":"2026-02-18","type":"gasto","amount":0.14,"category":"Otros","description":"Liquidación Contrato"},{"id":123,"date":"2026-02-18","type":"gasto","amount":14.61,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":124,"date":"2026-02-18","type":"gasto","amount":1.99,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":125,"date":"2026-02-18","type":"gasto","amount":6.72,"category":"Otros","description":"Amazon Mktp vx62b8fz5"},{"id":126,"date":"2026-02-18","type":"ingreso","amount":19.07,"category":"Trabajo","description":"Bizum de Alex Portella - Material Oficina"},{"id":127,"date":"2026-02-18","type":"gasto","amount":6.2,"category":"Alimentación","description":"Condis Barcelona"},{"id":128,"date":"2026-02-17","type":"gasto","amount":4.42,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":129,"date":"2026-02-17","type":"gasto","amount":8.99,"category":"Otros","description":"Amazon Ma43q2c05"},{"id":130,"date":"2026-02-17","type":"gasto","amount":8.9,"category":"Transporte","description":"Cabify Madrid"},{"id":131,"date":"2026-02-17","type":"gasto","amount":11.85,"category":"Transporte","description":"Taxi Llic 1765 Barcelona"},{"id":132,"date":"2026-02-16","type":"gasto","amount":21.6,"category":"Otros","description":"Amazon Ry0hm5jf5"},{"id":133,"date":"2026-02-16","type":"gasto","amount":5.0,"category":"Restaurantes","description":"La Pampa Monaco"},{"id":134,"date":"2026-02-16","type":"gasto","amount":7.0,"category":"Transporte","description":"Taxi Llic 8617 Badalona"},{"id":135,"date":"2026-02-16","type":"ingreso","amount":24.9,"category":"Ropa","description":"Devolución Uniqlo Nice"},{"id":136,"date":"2026-02-16","type":"gasto","amount":5.07,"category":"Alimentación","description":"Bon Area Sant Ramon"},{"id":137,"date":"2026-02-16","type":"gasto","amount":9.42,"category":"Alimentación","description":"Condis Barcelona"},{"id":138,"date":"2026-02-15","type":"gasto","amount":1.97,"category":"Salud","description":"Farmacia C. Pign Barcelona"},{"id":139,"date":"2026-02-13","type":"gasto","amount":2.0,"category":"Restaurantes","description":"La Ciociara Menton"},{"id":140,"date":"2026-02-13","type":"gasto","amount":12.87,"category":"Suscripciones","description":"Vodafone Servicios"},{"id":141,"date":"2026-02-12","type":"gasto","amount":7.0,"category":"Restaurantes","description":"Epi Do R Antibes"},{"id":142,"date":"2026-02-12","type":"gasto","amount":6.0,"category":"Restaurantes","description":"La Fontaine Nice"},{"id":143,"date":"2026-02-12","type":"gasto","amount":2.5,"category":"Restaurantes","description":"Le Kalice St Laurent"},{"id":144,"date":"2026-02-11","type":"gasto","amount":24.9,"category":"Ropa","description":"Uniqlo Nice"},{"id":145,"date":"2026-02-10","type":"gasto","amount":10.0,"category":"Transporte","description":"Uber Amsterdam"},{"id":146,"date":"2026-02-10","type":"gasto","amount":7.5,"category":"Restaurantes","description":"Cafe de Lyon Nice"},{"id":147,"date":"2026-02-08","type":"gasto","amount":12.35,"category":"Transporte","description":"Taxi Llic 3693 Barcelona"},{"id":148,"date":"2026-02-07","type":"gasto","amount":7.15,"category":"Alimentación","description":"Auto Servicio T Barcelona"},{"id":149,"date":"2026-02-07","type":"gasto","amount":4.5,"category":"Restaurantes","description":"Enrique Tomas Barcelona"},{"id":150,"date":"2026-02-07","type":"gasto","amount":9.05,"category":"Transporte","description":"Taxi Lic 5066 Barcelona"},{"id":151,"date":"2026-02-05","type":"gasto","amount":7.49,"category":"Otros","description":"Amazon Ug5mk4uj5"},{"id":152,"date":"2026-02-04","type":"gasto","amount":11.35,"category":"Transporte","description":"Taxi Llic 8486 Badalona"},{"id":153,"date":"2026-02-04","type":"gasto","amount":4.9,"category":"Ocio","description":"Fira de Barcelona Hospitalet"},{"id":154,"date":"2026-02-04","type":"gasto","amount":9.1,"category":"Transporte","description":"Taxi B60318094 Barcelona"},{"id":155,"date":"2026-02-03","type":"gasto","amount":9.0,"category":"Otros","description":"Xavier Rubio Pu Tona"},{"id":156,"date":"2026-02-02","type":"gasto","amount":9.65,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":157,"date":"2026-02-02","type":"gasto","amount":9.59,"category":"Alimentación","description":"Condis Barcelona"},{"id":158,"date":"2026-02-02","type":"ingreso","amount":8.0,"category":"Otros","description":"Bizum de Muriel Sol Bianchi"},{"id":159,"date":"2026-02-02","type":"gasto","amount":8.0,"category":"Restaurantes","description":"Rincon Fluvia Barcelona"},{"id":160,"date":"2026-02-02","type":"gasto","amount":18.41,"category":"Alimentación","description":"Condis Barcelona"},{"id":161,"date":"2026-02-02","type":"gasto","amount":57.59,"category":"Hogar","description":"Bac de Roda Sport - Gimnasio"},{"id":162,"date":"2026-02-01","type":"gasto","amount":549.0,"category":"Hogar","description":"Alquiler piso (Stefania)"},{"id":163,"date":"2026-02-01","type":"gasto","amount":69.8,"category":"Otros","description":"Bizum a Alessia Derossi"},{"id":164,"date":"2026-02-01","type":"gasto","amount":1.0,"category":"Hogar","description":"Alquiler piso (Stefania)"},{"id":165,"date":"2026-02-01","type":"gasto","amount":6.25,"category":"Alimentación","description":"El Fornet Catalunya"},{"id":166,"date":"2026-01-31","type":"gasto","amount":14.9,"category":"Transporte","description":"TNA 21 008 Catalunya"},{"id":167,"date":"2026-01-31","type":"ingreso","amount":1599.8,"category":"Trabajo","description":"Nómina Sia Interactive 01/2026"},{"id":168,"date":"2026-01-19","type":"gasto","amount":2.25,"category":"Alimentación","description":"Condis Barcelona"},{"id":169,"date":"2026-01-16","type":"gasto","amount":7.99,"category":"Ocio","description":"Wine Palace Barcelona"},{"id":170,"date":"2026-01-16","type":"gasto","amount":5.15,"category":"Hogar","description":"Bazar Hong Lian Barcelona"},{"id":171,"date":"2026-01-16","type":"gasto","amount":28.85,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":172,"date":"2026-01-15","type":"gasto","amount":3.0,"category":"Restaurantes","description":"Antico Sol Tagamanent"},{"id":173,"date":"2026-01-15","type":"gasto","amount":20.15,"category":"Restaurantes","description":"Restaurante Cas Barcelona"},{"id":174,"date":"2026-01-15","type":"gasto","amount":7.45,"category":"Alimentación","description":"Condis Barcelona"},{"id":175,"date":"2026-01-14","type":"gasto","amount":16.2,"category":"Ropa","description":"Altell Textil"},{"id":176,"date":"2026-01-14","type":"gasto","amount":5.0,"category":"Restaurantes","description":"Azienda Napole Napoli"},{"id":177,"date":"2026-01-14","type":"gasto","amount":17.0,"category":"Restaurantes","description":"Tripodi Marco Paola"},{"id":178,"date":"2026-01-14","type":"gasto","amount":6.5,"category":"Restaurantes","description":"Cannavacciuolo Aeropuerto Napoli"},{"id":179,"date":"2026-01-14","type":"gasto","amount":14.9,"category":"Alimentación","description":"Conad Supermercato Paola"},{"id":180,"date":"2026-01-14","type":"gasto","amount":30.0,"category":"Transporte","description":"Trenitalia Lefrecce Roma"},{"id":181,"date":"2026-01-14","type":"gasto","amount":76.9,"category":"Otros","description":"Bizum a Federico Rochlin"},{"id":182,"date":"2026-01-14","type":"gasto","amount":10.91,"category":"Suscripciones","description":"Vodafone Servicios"},{"id":183,"date":"2026-01-14","type":"gasto","amount":4.0,"category":"Restaurantes","description":"Caffe Del Porto Paola"},{"id":184,"date":"2026-01-14","type":"gasto","amount":25.0,"category":"Salud","description":"Farmacia Centrale Paola"},{"id":185,"date":"2026-01-14","type":"gasto","amount":3.0,"category":"Restaurantes","description":"Bar Della Stazione Paola"},{"id":186,"date":"2026-01-13","type":"gasto","amount":6.63,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":187,"date":"2026-01-13","type":"gasto","amount":1.5,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":188,"date":"2026-01-13","type":"gasto","amount":3.0,"category":"Restaurantes","description":"Khan Md Hafiz Napoli"},{"id":189,"date":"2026-01-13","type":"gasto","amount":38.0,"category":"Restaurantes","description":"Bb La Piazzetta Paola"},{"id":190,"date":"2026-01-13","type":"gasto","amount":13.0,"category":"Restaurantes","description":"Starita Napoli"},{"id":191,"date":"2026-01-13","type":"gasto","amount":20.0,"category":"Restaurantes","description":"Osteria Da Sor Paola"},{"id":192,"date":"2026-01-13","type":"gasto","amount":4.2,"category":"Restaurantes","description":"Le Dolcezze Del Cuo Napoli"},{"id":193,"date":"2026-01-13","type":"gasto","amount":10.5,"category":"Restaurantes","description":"Caffe D'Epoca Napoli"},{"id":194,"date":"2026-01-13","type":"gasto","amount":1.05,"category":"Otros","description":"Tiger Italia Napoli"},{"id":195,"date":"2026-01-13","type":"gasto","amount":4.7,"category":"Restaurantes","description":"Espresso Napoletano Napoli"},{"id":196,"date":"2026-01-13","type":"gasto","amount":42.12,"category":"Transporte","description":"Uber Trip Amsterdam"},{"id":197,"date":"2026-01-13","type":"gasto","amount":5.0,"category":"Restaurantes","description":"Azienda Napole Napoli"},{"id":198,"date":"2026-01-13","type":"gasto","amount":30.0,"category":"Transporte","description":"Trenitalia Lefrecce Roma"},{"id":199,"date":"2026-01-13","type":"gasto","amount":7.43,"category":"Alimentación","description":"Condis Barcelona"},{"id":200,"date":"2026-01-12","type":"gasto","amount":7.5,"category":"Restaurantes","description":"Kaitensushi He Barcelona"},{"id":201,"date":"2026-01-12","type":"gasto","amount":15.0,"category":"Restaurantes","description":"PLK14372 Ronda Barcelona"},{"id":202,"date":"2026-01-12","type":"gasto","amount":7.45,"category":"Transporte","description":"Monbus Barcelona"},{"id":203,"date":"2026-01-11","type":"gasto","amount":3.6,"category":"Restaurantes","description":"SSP Aeropuerto Barcelona"},{"id":204,"date":"2026-01-11","type":"gasto","amount":2.66,"category":"Transporte","description":"Aeroport Barcelona El Prat"},{"id":205,"date":"2026-01-10","type":"gasto","amount":1.35,"category":"Restaurantes","description":"L Teu Barri Barcelona"},{"id":206,"date":"2026-01-10","type":"gasto","amount":17.7,"category":"Restaurantes","description":"Smash House Burger Barcelona"},{"id":207,"date":"2026-01-10","type":"gasto","amount":7.75,"category":"Restaurantes","description":"Cafe Floh Barcelona"},{"id":208,"date":"2026-01-10","type":"gasto","amount":3.0,"category":"Restaurantes","description":"Bar Tarbush Barcelona"},{"id":209,"date":"2026-01-09","type":"gasto","amount":21.9,"category":"Restaurantes","description":"Umaimon Ramen Barcelona"},{"id":210,"date":"2026-01-09","type":"gasto","amount":5.5,"category":"Ropa","description":"Suca'l Poblenou Textil"},{"id":211,"date":"2026-01-09","type":"gasto","amount":3.99,"category":"Alimentación","description":"Too Good To Go"},{"id":212,"date":"2026-01-08","type":"gasto","amount":2.75,"category":"Alimentación","description":"Auto Servicio T Vicenz Montal"},{"id":213,"date":"2026-01-07","type":"gasto","amount":4.99,"category":"Otros","description":"Amazon Zg3a83ip4"},{"id":214,"date":"2026-01-07","type":"gasto","amount":9.9,"category":"Otros","description":"Amazon Zg2oc2u74"},{"id":215,"date":"2026-01-07","type":"gasto","amount":7.95,"category":"Otros","description":"Amazon Zg4jf9i94"},{"id":216,"date":"2026-01-07","type":"gasto","amount":9.99,"category":"Otros","description":"Amazon Zg5kb9ix4"},{"id":217,"date":"2026-01-07","type":"gasto","amount":11.68,"category":"Restaurantes","description":"Glovo Barcelona"},{"id":218,"date":"2026-01-07","type":"gasto","amount":18.99,"category":"Otros","description":"Amazon Zg4rr4um4"},{"id":219,"date":"2026-01-07","type":"gasto","amount":26.5,"category":"Otros","description":"Amazon Mktp Zc7xl0cf4"},{"id":220,"date":"2026-01-06","type":"gasto","amount":4.2,"category":"Restaurantes","description":"Spice Bite Barcelona"},{"id":221,"date":"2026-01-06","type":"gasto","amount":28.39,"category":"Alimentación","description":"DIA 31024 Barcelona"},{"id":222,"date":"2026-01-06","type":"gasto","amount":4.95,"category":"Restaurantes","description":"Santa Gloria Barcelona"},{"id":223,"date":"2026-01-05","type":"gasto","amount":18.5,"category":"Restaurantes","description":"Manteca Vermut Barcelona"},{"id":224,"date":"2026-01-05","type":"gasto","amount":2.5,"category":"Alimentación","description":"Sonoara Super Barcelona"},{"id":225,"date":"2026-01-05","type":"gasto","amount":25.99,"category":"Otros","description":"Amazon Zg9uw0ep4"},{"id":226,"date":"2026-01-05","type":"gasto","amount":22.4,"category":"Restaurantes","description":"Glovo Barcelona"},{"id":227,"date":"2026-01-05","type":"gasto","amount":9.65,"category":"Transporte","description":"Uber Amsterdam"},{"id":228,"date":"2026-01-05","type":"gasto","amount":13.99,"category":"Otros","description":"Amazon Mktp Zg4qc4a14"},{"id":229,"date":"2026-01-05","type":"gasto","amount":13.21,"category":"Ropa","description":"Altell Textil"},{"id":230,"date":"2026-01-05","type":"gasto","amount":8.18,"category":"Restaurantes","description":"Casa Gode Barcelona"},{"id":231,"date":"2026-01-05","type":"gasto","amount":2.5,"category":"Restaurantes","description":"Gode Coffee Barcelona"},{"id":232,"date":"2026-01-04","type":"gasto","amount":3.95,"category":"Restaurantes","description":"Yoki Barcelona"},{"id":233,"date":"2026-01-04","type":"gasto","amount":4.55,"category":"Alimentación","description":"Condis 3370 Barcelona"},{"id":234,"date":"2026-01-03","type":"gasto","amount":6.38,"category":"Alimentación","description":"Condis 3370 Barcelona"},{"id":235,"date":"2026-01-03","type":"gasto","amount":15.2,"category":"Restaurantes","description":"BCN 50 Guipuscoa Barcelona"},{"id":236,"date":"2026-01-03","type":"gasto","amount":34.9,"category":"Hogar","description":"Sueños Espronce Barcelona"},{"id":237,"date":"2026-01-03","type":"gasto","amount":63.84,"category":"Alimentación","description":"Mercadona Barcelona"},{"id":238,"date":"2026-01-03","type":"gasto","amount":16.78,"category":"Alimentación","description":"Carref Las Glories Barcelona"},{"id":239,"date":"2026-01-03","type":"gasto","amount":25.94,"category":"Hogar","description":"IKEA Glories Barcelona"},{"id":240,"date":"2026-01-03","type":"gasto","amount":5.2,"category":"Alimentación","description":"El Fornet Barcelona"},{"id":241,"date":"2026-01-02","type":"gasto","amount":675.0,"category":"Hogar","description":"Alquiler piso (Stefania)"},{"id":242,"date":"2026-01-02","type":"gasto","amount":7.3,"category":"Restaurantes","description":"Itnig Coffee Barcelona"},{"id":243,"date":"2026-01-02","type":"gasto","amount":5.0,"category":"Otros","description":"Bizum a Macarena Prado Moretti"},{"id":244,"date":"2026-01-02","type":"gasto","amount":9.5,"category":"Alimentación","description":"Super Khalil Barcelona"},{"id":245,"date":"2026-01-02","type":"gasto","amount":1.7,"category":"Restaurantes","description":"Casa Maria Rest Barcelona"},{"id":246,"date":"2026-01-02","type":"gasto","amount":28.87,"category":"Otros","description":"Impuesto Tasas del Tesoro 2026"},{"id":247,"date":"2026-01-02","type":"gasto","amount":57.59,"category":"Hogar","description":"Bac de Roda Sport - Gimnasio"},{"id":248,"date":"2026-01-01","type":"gasto","amount":9.81,"category":"Alimentación","description":"Condis Supermercado Barcelona"},{"id":249,"date":"2026-01-01","type":"gasto","amount":11.05,"category":"Transporte","description":"Taxi BCN 4975 Barcelona"}];

const CAT_COLORS={'Alimentación':'#6bbf8e','Transporte':'#6aa8d4','Restaurantes':'#d4a843','Ocio':'#c87dd4','Salud':'#e05c5c','Hogar':'#e8a45c','Ropa':'#d4c06a','Suscripciones':'#6ad4c8','Trabajo':'#8ea8d4','Otros':'#8a8578','Sueldo':'#a78bfa','Alquiler':'#f97316'};
const CAT_EMOJI={'Alimentación':'🛒','Transporte':'🚗','Restaurantes':'🍽️','Ocio':'🎬','Salud':'💊','Hogar':'🏠','Ropa':'👗','Suscripciones':'📱','Trabajo':'💼','Otros':'📦','Sueldo':'💳','Alquiler':'🏠'};
const MONTH_LBL={'2026-01':'Enero','2026-02':'Febrero','2026-03':'Marzo','2026-04':'Abril','2026-05':'Mayo','2026-06':'Junio','2026-07':'Julio','2026-08':'Agosto','2026-09':'Septiembre','2026-10':'Octubre','2026-11':'Noviembre','2026-12':'Diciembre'};

let txs=[...BASE_TXS];
let activeMon='2026-03';
let editingId=null;
let deletingId=null;
let pendingImport=[];

// ── Auto-classify ─────────────────────────────────────────────────────────────
function classifyAuto(t){
  const d=(t.description||'').toLowerCase();
  if(t.amount>=1000&&t.type==='ingreso'){t.category='Sueldo';return t;}
  if(d.includes('alquiler')||d.includes('stefania')){t.category='Alquiler';return t;}
  if(d.includes('condis')||d.includes('mercadona')||d.includes('lidl')||d.includes('aldi')||d.includes('supermercado')||d.includes('carrefour')||d.includes('casa gode')){t.category='Alimentación';return t;}
  if(d.includes('restaurante')||d.includes('bar ')||d.includes('coffee')||d.includes('pizz')||d.includes('burger')||d.includes('sushi')||d.includes('almodo')){t.category='Restaurantes';return t;}
  if(d.includes('metro')||d.includes('renfe')||d.includes('glovo')||d.includes('uber')||d.includes('cabify')||d.includes('parking')||d.includes('gasolinera')){t.category='Transporte';return t;}
  if(d.includes('farmacia')||d.includes('medic')||d.includes('hospital')||d.includes('clinica')){t.category='Salud';return t;}
  if(d.includes('netflix')||d.includes('spotify')||d.includes('amazon prime')||d.includes('hbo')||d.includes('disney')||d.includes('vodafone')||d.includes('movistar')){t.category='Suscripciones';return t;}
  if(d.includes('zara')||d.includes('h&m')||d.includes('mango')||d.includes('primark')){t.category='Ropa';return t;}
  if(d.includes('amazon')&&t.type==='gasto'){t.category='Hogar';return t;}
  if(d.includes('gym')||d.includes('sport')||d.includes('fitness')||d.includes('bac de roda')){t.category='Ocio';return t;}
  if(t.type==='ingreso'){t.category='Sueldo';return t;}
  t.category='Otros';
  return t;
}

// ── Storage ───────────────────────────────────────────────────────────────────
function loadAll(){
  const saved=localStorage.getItem('fin-txs');
  if(saved){try{txs=JSON.parse(saved);}catch(e){txs=[...BASE_TXS];}}
}
function saveTxs(){try{localStorage.setItem('fin-txs',JSON.stringify(txs));}catch(e){}}

// ── Tab switching ─────────────────────────────────────────────────────────────
function switchTab(t){
  document.getElementById('txs-area').style.display=t==='txs'?'flex':'none';
  document.getElementById('cats-area').style.display=t==='cats'?'flex':'none';
  document.getElementById('tab-txs').classList.toggle('active',t==='txs');
  document.getElementById('tab-cats').classList.toggle('active',t==='cats');
  // Bottom nav
  const bt=document.getElementById('bnav-txs');
  const bc=document.getElementById('bnav-cats');
  if(bt)bt.classList.toggle('active',t==='txs');
  if(bc)bc.classList.toggle('active',t==='cats');
  if(t==='txs')renderTable();
  if(t==='cats')renderCats();
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
function buildMonthTabs(){
  const months=[...new Set(txs.map(t=>t.date.slice(0,7)))].sort().reverse();
  const sel=document.getElementById('tx-filter-month');
  const curVal=sel.value;
  sel.innerHTML='<option value="">Todos los meses</option>'+months.map(m=>`<option value="${m}">${MONTH_LBL[m]||m}</option>`).join('');
  if(curVal)sel.value=curVal;
  // Sidebar tabs (desktop)
  document.getElementById('mtabs').innerHTML=months.map(m=>
    `<span class="mtab${m===activeMon?' active':''}" onclick="setMon('${m}')">${MONTH_LBL[m]||m}</span>`
  ).join('');
  // Month strip (mobile)
  const strip=document.getElementById('month-strip');
  if(strip){
    strip.innerHTML=['all',...months].map(m=>
      `<span class="mstrip-tab${(m==='all'&&!activeMon)||(m===activeMon)?' active':''}" onclick="setMonMobile('${m}')">${m==='all'?'Todo':MONTH_LBL[m]||m}</span>`
    ).join('');
  }
}
function setMonMobile(m){
  activeMon=m==='all'?'':m;
  buildMonthTabs();
  updateSidebar();
  renderTable();
}
function setMon(m){activeMon=m;buildMonthTabs();updateSidebar();}

function updateSidebar(){
  const mt=activeMon?txs.filter(t=>t.date.startsWith(activeMon)):txs;
  const ing=mt.filter(t=>t.type==='ingreso').reduce((s,t)=>s+t.amount,0);
  const gas=mt.filter(t=>t.type==='gasto').reduce((s,t)=>s+t.amount,0);
  const bal=ing-gas;
  document.getElementById('h-ing').textContent='€'+ing.toFixed(2);
  document.getElementById('h-gas').textContent='€'+gas.toFixed(2);
  const be=document.getElementById('h-bal');
  be.textContent=(bal>=0?'+':'')+'€'+Math.abs(bal).toFixed(2);
  be.className=bal>=0?'pos':'neg';
  // Stats strip (mobile)
  const si=document.getElementById('ss-ing');
  const sg=document.getElementById('ss-gas');
  const sb=document.getElementById('ss-bal');
  const ss=document.getElementById('ss-saldo');
  if(si)si.textContent='€'+ing.toFixed(2);
  if(sg)sg.textContent='€'+gas.toFixed(2);
  if(sb){sb.textContent=(bal>=0?'+':'')+'€'+Math.abs(bal).toFixed(2);sb.style.color=bal>=0?'var(--ok)':'var(--err)';}
  if(ss){const sv=localStorage.getItem('fin-saldo');if(sv)ss.textContent='€'+parseFloat(sv).toFixed(2);}
  const cats={};
  mt.filter(t=>t.type==='gasto').forEach(t=>{cats[t.category]=(cats[t.category]||0)+t.amount;});
  const mx=Math.max(...Object.values(cats),1);
  document.getElementById('cat-list').innerHTML=Object.keys(cats).length===0
    ?'<div style="color:var(--mut);font-size:11px;text-align:center;padding:8px 0">Sin gastos</div>'
    :Object.entries(cats).sort((a,b)=>b[1]-a[1]).map(([c,a])=>
      `<div class="cat-item"><div class="cat-hdr"><span>${CAT_EMOJI[c]||'📦'} ${c}</span><span style="color:var(--mut)">€${a.toFixed(0)}</span></div><div class="cat-bar"><div class="cat-fill" style="width:${(a/mx*100).toFixed(0)}%;background:${CAT_COLORS[c]||'#8a8578'}"></div></div></div>`
    ).join('');
  document.getElementById('tx-list').innerHTML=[...txs].reverse().slice(0,8).map(t=>
    `<div class="tx-row" onclick="openTxModal(${t.id})"><div class="tx-ico">${CAT_EMOJI[t.category]||'📦'}</div><div class="tx-inf"><div class="tx-desc">${t.description}</div><div class="tx-cat">${t.category} · ${new Date(t.date+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'short'})}</div></div><div class="tx-amt ${t.type}">${t.type==='gasto'?'-':'+'}€${t.amount.toFixed(2)}</div></div>`
  ).join('');
}

// ── Transactions table + cards ────────────────────────────────────────────────
function renderTable(){
  const search=document.getElementById('tx-search').value.toLowerCase();
  const mon=document.getElementById('tx-filter-month').value||activeMon;
  const cat=document.getElementById('tx-filter-cat').value;
  const type=document.getElementById('tx-filter-type').value;
  let filtered=[...txs].filter(t=>{
    if(mon&&!t.date.startsWith(mon))return false;
    if(cat&&t.category!==cat)return false;
    if(type&&t.type!==type)return false;
    if(search&&!t.description.toLowerCase().includes(search)&&!t.category.toLowerCase().includes(search))return false;
    return true;
  }).sort((a,b)=>b.date.localeCompare(a.date));

  // Desktop table
  document.getElementById('tx-tbody').innerHTML=filtered.map(t=>`
    <tr onclick="openTxModal(${t.id})">
      <td>${new Date(t.date+'T12:00:00').toLocaleDateString('es-ES',{day:'2-digit',month:'short',year:'numeric'})}</td>
      <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.description}</td>
      <td><span class="cat-badge" style="background:${CAT_COLORS[t.category]||'#8a8578'}22;color:${CAT_COLORS[t.category]||'#8a8578'}">${CAT_EMOJI[t.category]||'📦'} ${t.category}</span></td>
      <td><span class="badge ${t.type==='gasto'?'badge-g':'badge-i'}">${t.type==='gasto'?'Gasto':'Ingreso'}</span></td>
      <td class="amt-${t.type}">${t.type==='gasto'?'-':'+'}€${t.amount.toFixed(2)}</td>
      <td onclick="event.stopPropagation()"><div style="display:flex;gap:4px"><button class="ta-btn" onclick="openTxModal(${t.id})">✏️</button><button class="ta-btn del" onclick="openDelModal(${t.id},'${t.description.replace(/'/g,"\\'")}')">🗑️</button></div></td>
    </tr>`).join('');

  // Mobile cards
  const cards=document.getElementById('tx-cards');
  if(cards){
    if(filtered.length===0){
      cards.innerHTML='<div style="text-align:center;color:var(--mut);padding:40px 20px;font-size:13px">Sin movimientos</div>';
    } else {
      cards.innerHTML=filtered.map(t=>{
        const dateStr=new Date(t.date+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'short'});
        return `<div class="tx-card" onclick="openTxModal(${t.id})">
          <div class="txc-icon">${CAT_EMOJI[t.category]||'📦'}</div>
          <div class="txc-info">
            <div class="txc-desc">${t.description}</div>
            <div class="txc-meta">${t.category} · ${dateStr}</div>
          </div>
          <div class="txc-amount ${t.type}">${t.type==='gasto'?'-':'+'}€${t.amount.toFixed(2)}</div>
        </div>`;
      }).join('');
    }
  }

  const total=filtered.reduce((s,t)=>t.type==='gasto'?s-t.amount:s+t.amount,0);
  document.getElementById('tx-count').innerHTML=`<strong>${filtered.length}</strong> movimientos · <strong style="color:${total>=0?'var(--ok)':'var(--err)'}">${total>=0?'+':''}€${Math.abs(total).toFixed(2)}</strong>`;
}

// ── ABM ───────────────────────────────────────────────────────────────────────
function openTxModal(id){
  editingId=id;
  document.getElementById('tx-modal-err').style.display='none';
  const del=document.getElementById('btn-delete');
  if(id===null){
    document.getElementById('tx-modal-title').textContent='Nueva transacción';
    document.getElementById('f-type').value='gasto';
    document.getElementById('f-desc').value='';
    document.getElementById('f-amount').value='';
    document.getElementById('f-cat').value='Alimentación';
    document.getElementById('f-date').value=new Date().toISOString().slice(0,10);
    del.classList.add('hide');
  } else {
    const t=txs.find(x=>x.id===id);if(!t)return;
    document.getElementById('tx-modal-title').textContent='Editar transacción';
    document.getElementById('f-type').value=t.type;
    document.getElementById('f-desc').value=t.description;
    document.getElementById('f-amount').value=t.amount;
    document.getElementById('f-cat').value=t.category;
    document.getElementById('f-date').value=t.date.slice(0,10);
    del.classList.remove('hide');
  }
  document.getElementById('tx-modal').classList.remove('hide');
  setTimeout(()=>document.getElementById('f-desc').focus(),80);
}
function closeTxModal(){document.getElementById('tx-modal').classList.add('hide');editingId=null;}
function saveTx(){
  const type=document.getElementById('f-type').value;
  const desc=document.getElementById('f-desc').value.trim();
  const amount=parseFloat(document.getElementById('f-amount').value);
  const cat=document.getElementById('f-cat').value;
  const date=document.getElementById('f-date').value;
  const err=document.getElementById('tx-modal-err');
  if(!desc){err.textContent='La descripción es obligatoria.';err.style.display='block';return;}
  if(!amount||amount<=0){err.textContent='El importe debe ser mayor a 0.';err.style.display='block';return;}
  if(!date){err.textContent='La fecha es obligatoria.';err.style.display='block';return;}
  err.style.display='none';
  if(editingId===null){
    txs.push(classifyAuto({id:Date.now(),type,description:desc,amount,category:cat,date}));
  } else {
    const idx=txs.findIndex(x=>x.id===editingId);
    if(idx>=0)txs[idx]={...txs[idx],type,description:desc,amount,category:cat,date};
  }
  saveTxs();buildMonthTabs();updateSidebar();renderTable();closeTxModal();
}
function deleteTx(){
  if(editingId===null)return;
  const t=txs.find(x=>x.id===editingId);
  closeTxModal();openDelModal(t.id,t.description);
}
function openDelModal(id,desc){deletingId=id;document.getElementById('del-desc').textContent=`"${desc}"`;document.getElementById('del-modal').classList.remove('hide');}
function closeDelModal(){document.getElementById('del-modal').classList.add('hide');deletingId=null;}
function confirmDelete(){
  if(deletingId===null)return;
  txs=txs.filter(x=>x.id!==deletingId);
  saveTxs();buildMonthTabs();updateSidebar();renderTable();closeDelModal();
}
['tx-modal','del-modal'].forEach(id=>{
  document.getElementById(id).addEventListener('click',function(e){if(e.target===this){if(id==='tx-modal')closeTxModal();else closeDelModal();}});
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeTxModal();closeDelModal();closePdfModal();}});

// ── PDF Import (local, sin API) ───────────────────────────────────────────────
if(typeof pdfjsLib!=='undefined'){
  pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Detecta si una transacción ya existe: misma fecha + importe + tipo
function isDuplicate(t){
  return txs.some(x=>x.date===t.date && Math.abs(x.amount-t.amount)<0.01 && x.type===t.type);
}

function renderPdfList(parsed){
  const newOnes=parsed.filter(t=>!t._dup);
  const dups=parsed.filter(t=>t._dup);
  const title=document.getElementById('pdf-modal-title');
  const summary=document.getElementById('pdf-modal-summary');
  const list=document.getElementById('pdf-modal-list');
  const btn=document.getElementById('pdf-import-btn');
  const btn2=document.getElementById('pdf-import-all-btn');

  title.textContent='📄 Revisión de movimientos';

  if(dups.length===0){
    summary.innerHTML=`<span style="color:var(--ok)">✓</span> <strong>${newOnes.length} movimientos nuevos</strong> listos para importar.`;
    btn.textContent='Importar todos →';
    btn.style.display='block';
    if(btn2)btn2.style.display='none';
  } else if(newOnes.length===0){
    summary.innerHTML=`<span style="color:var(--acc)">⚠️</span> Los <strong>${dups.length} movimientos</strong> del PDF ya existen en tu historial.`;
    btn.textContent='Importar igual (duplicar)';
    btn.style.display='block';
    if(btn2)btn2.style.display='none';
  } else {
    summary.innerHTML=
      `<strong style="color:var(--ok)">${newOnes.length} nuevos</strong> · ` +
      `<strong style="color:var(--acc)">${dups.length} posibles duplicados</strong> (misma fecha, importe y tipo)`;
    btn.textContent=`Importar solo nuevos (${newOnes.length}) →`;
    btn.style.display='block';
    if(btn2){btn2.style.display='block';btn2.textContent=`Importar todos (${parsed.length})`;}
  }

  list.innerHTML=parsed.map(t=>{
    const dup=t._dup;
    return `<div style="display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:7px;
      background:${dup?'rgba(212,168,67,0.06)':'var(--s2)'};
      border:1px solid ${dup?'rgba(212,168,67,0.25)':'transparent'};
      opacity:${dup?'0.65':'1'};font-size:12px">
      <span style="font-size:13px">${dup?'⚠️':t.type==='gasto'?'🔴':'🟢'}</span>
      <span style="color:var(--mut);width:76px;flex-shrink:0;font-size:11px">${t.date}</span>
      <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
        ${dup?'text-decoration:line-through;color:var(--mut)':''}">${t.description}</span>
      <span style="font-weight:700;color:${t.type==='gasto'?'var(--err)':'var(--ok)'};flex-shrink:0;margin-left:8px">
        ${t.type==='gasto'?'-':'+'}€${t.amount.toFixed(2)}</span>
      ${dup?'<span style="font-size:10px;color:var(--acc);flex-shrink:0">duplicado</span>':
            `<span style="font-size:10px;color:var(--mut);flex-shrink:0;min-width:70px;text-align:right">${t.category}</span>`}
    </div>`;
  }).join('');

  btn.disabled=false;
}

async function handlePdf(e){
  const file=e.target.files[0];
  e.target.value='';
  if(!file)return;
  const title=document.getElementById('pdf-modal-title');
  const summary=document.getElementById('pdf-modal-summary');
  const list=document.getElementById('pdf-modal-list');
  const errEl=document.getElementById('pdf-modal-err');
  const btn=document.getElementById('pdf-import-btn');
  title.textContent='📄 Procesando...';
  summary.textContent='Extrayendo texto del extracto bancario...';
  list.innerHTML='<div style="color:var(--mut);text-align:center;padding:24px">⏳ Analizando PDF...</div>';
  errEl.style.display='none';
  btn.disabled=true;
  document.getElementById('pdf-modal').classList.remove('hide');
  try{
    const ab=await file.arrayBuffer();
    const pdf=await pdfjsLib.getDocument({data:ab}).promise;
    const rows=[];
    for(let p=1;p<=pdf.numPages;p++){
      const page=await pdf.getPage(p);
      const content=await page.getTextContent();
      const lineMap={};
      for(const item of content.items){
        if(!item.str||!item.str.trim())continue;
        const y=Math.round(item.transform[5]/3)*3;
        if(!lineMap[y])lineMap[y]=[];
        lineMap[y].push({text:item.str,x:item.transform[4]});
      }
      Object.keys(lineMap).map(Number).sort((a,b)=>b-a).forEach(y=>{
        const line=lineMap[y].sort((a,b)=>a.x-b.x).map(i=>i.text).join(' ').trim();
        if(line)rows.push(line);
      });
    }
    const parsed=parseStatementRows(rows);
    if(parsed.length===0){
      title.textContent='📄 Sin resultados';
      summary.textContent='No se encontraron transacciones. Verificá que sea un extracto bancario.';
      list.innerHTML='<div style="color:var(--mut);text-align:center;padding:24px">No se detectaron movimientos.<br><small style="color:var(--mut)">Formatos soportados: Santander, BBVA, CaixaBank, ING, N26</small></div>';
      btn.disabled=true;return;
    }
    // Marcar duplicados
    parsed.forEach(t=>{ t._dup=isDuplicate(t); });
    pendingImport=parsed;
    renderPdfList(parsed);
  }catch(err){
    title.textContent='❌ Error al leer el PDF';
    summary.textContent='';
    errEl.textContent='Error: '+err.message;
    errEl.style.display='block';
    list.innerHTML='';
    btn.disabled=true;
  }
}

function parseStatementRows(rows){
  const results=[];
  const SKIP=['saldo','fecha valor','concepto','importe','debe','haber','movimiento','extracto','cuenta','titular','periodo','total','página','page'];
  const dateRx=/\b(\d{2})[\/\-\.](\d{2})[\/\-\.](\d{2,4})\b/;
  const amtRxG=/([+\-]?\s*\d{1,3}(?:\.\d{3})*,\d{2})/g;
  for(const row of rows){
    const low=row.toLowerCase();
    if(SKIP.some(s=>low.includes(s)))continue;
    const dm=row.match(dateRx);
    if(!dm)continue;
    let [,d,m,y]=dm;
    if(y.length===2)y=(parseInt(y)>50?'19':'20')+y;
    const date=`${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`;
    const amounts=[...row.matchAll(amtRxG)].map(a=>parseFloat(a[1].replace(/\s/g,'').replace(/\./g,'').replace(',','.'))).filter(n=>!isNaN(n)&&Math.abs(n)>=0.01);
    if(!amounts.length)continue;
    const txAmt=amounts[0];
    let desc=row.replace(dateRx,'').replace(/[+\-]?\s*\d{1,3}(?:\.\d{3})*,\d{2}/g,' ').replace(/\s+/g,' ').trim().replace(/^[\s\-\.\|]+|[\s\-\.\|]+$/g,'');
    if(!desc||desc.length<2)continue;
    desc=desc.substring(0,80);
    results.push(classifyAuto({id:Date.now()+results.length,date,description:desc,amount:Math.abs(txAmt),type:txAmt<0?'gasto':'ingreso',category:'Otros'}));
  }
  return results;
}

function closePdfModal(){
  document.getElementById('pdf-modal').classList.add('hide');
  pendingImport=[];
}

function confirmImport(onlyNew=true){
  if(!pendingImport.length)return;
  const toImport=onlyNew ? pendingImport.filter(t=>!t._dup) : pendingImport;
  if(!toImport.length){closePdfModal();return;}
  const now=Date.now();
  toImport.forEach((t,i)=>{t.id=now+i; delete t._dup; txs.push(t);});
  saveTxs();buildMonthTabs();updateSidebar();renderTable();
  const n=toImport.length;
  pendingImport=[];
  closePdfModal();
  const toast=document.createElement('div');
  toast.textContent='✓ '+n+' movimientos importados';
  toast.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--ok);color:#fff;padding:10px 22px;border-radius:20px;font-size:13px;font-weight:700;z-index:9999;pointer-events:none';
  document.body.appendChild(toast);
  setTimeout(()=>toast.remove(),2500);
}
document.getElementById('pdf-modal').addEventListener('click',function(e){if(e.target===this)closePdfModal();});

// ── Category detail ───────────────────────────────────────────────────────────
let catPeriod='all';
function setCatPeriod(p){catPeriod=p;document.querySelectorAll('.cpt').forEach(el=>el.classList.remove('active'));document.getElementById('cpt-'+p).classList.add('active');renderCats();}
function renderCats(){
  const selCat=document.getElementById('cat-select').value;
  const content=document.getElementById('cats-content');
  let filtered=txs.filter(t=>{
    if(catPeriod!=='all'&&!t.date.startsWith(catPeriod))return false;
    if(selCat!=='ALL'&&t.category!==selCat)return false;
    return true;
  });
  if(!filtered.length){content.innerHTML='<div class="no-data">Sin transacciones para este filtro</div>';return;}
  const gastos=filtered.filter(t=>t.type==='gasto');
  const ingresos=filtered.filter(t=>t.type==='ingreso');
  const totalG=gastos.reduce((s,t)=>s+t.amount,0);
  const totalI=ingresos.reduce((s,t)=>s+t.amount,0);
  const mayor=gastos.length?Math.max(...gastos.map(t=>t.amount)):0;
  const prom=gastos.length?totalG/gastos.length:0;
  let html=`<div class="cats-summary">
    <div class="sum-card"><div class="sc-lbl">Total gastos</div><div class="sc-val neg">-€${totalG.toFixed(2)}</div><div class="sc-sub">${gastos.length} movimientos</div></div>
    <div class="sum-card"><div class="sc-lbl">Total ingresos</div><div class="sc-val pos">+€${totalI.toFixed(2)}</div><div class="sc-sub">${ingresos.length} movimientos</div></div>
    <div class="sum-card"><div class="sc-lbl">Gasto mayor</div><div class="sc-val">€${mayor.toFixed(2)}</div><div class="sc-sub">transacción única</div></div>
    <div class="sum-card"><div class="sc-lbl">Promedio</div><div class="sc-val">€${prom.toFixed(2)}</div><div class="sc-sub">por gasto</div></div>
  </div>`;
  if(selCat==='ALL'){
    const byCat={};gastos.forEach(t=>{byCat[t.category]=(byCat[t.category]||0)+t.amount;});
    const sorted=Object.entries(byCat).sort((a,b)=>b[1]-a[1]);
    const mx=sorted.length?sorted[0][1]:1;
    html+=`<div class="cats-chart"><div class="ch-title">Gastos por categoría</div>${sorted.map(([cat,amt])=>`<div class="bar-row"><div class="bar-label">${CAT_EMOJI[cat]||'📦'} ${cat}</div><div class="bar-track"><div class="bar-fill" style="width:${(amt/mx*100).toFixed(0)}%;background:${CAT_COLORS[cat]||'#8a8578'}"></div></div><div class="bar-amt" style="color:${CAT_COLORS[cat]||'#8a8578'}">€${amt.toFixed(0)}</div></div>`).join('')}</div>`;
  } else {
    const byMon={};gastos.forEach(t=>{const mo=t.date.slice(0,7);byMon[mo]=(byMon[mo]||0)+t.amount;});
    const sorted=Object.entries(byMon).sort((a,b)=>a[0].localeCompare(b[0]));
    const mx=sorted.length?Math.max(...sorted.map(x=>x[1])):1;
    const col=CAT_COLORS[selCat]||'#8a8578';
    html+=`<div class="cats-chart"><div class="ch-title">Evolución mensual — ${selCat}</div>${sorted.map(([mon,amt])=>`<div class="bar-row"><div class="bar-label">${MONTH_LBL[mon]||mon}</div><div class="bar-track"><div class="bar-fill" style="width:${(amt/mx*100).toFixed(0)}%;background:${col}"></div></div><div class="bar-amt" style="color:${col}">€${amt.toFixed(0)}</div></div>`).join('')}</div>`;
  }
  const sortedTx=[...filtered].sort((a,b)=>b.date.localeCompare(a.date));
  html+=`<div class="cats-detail-table"><div class="dt-header"><span>${filtered.length} transacciones</span><span style="color:var(--mut);font-size:10px">Clic para editar</span></div><div class="dt-rows-wrap">${sortedTx.map(t=>`<div class="dt-row" onclick="openTxModal(${t.id})"><div class="dt-date">${new Date(t.date+'T12:00:00').toLocaleDateString('es-ES',{day:'2-digit',month:'short'})}</div><div class="dt-cat-dot" style="background:${CAT_COLORS[t.category]||'#8a8578'}"></div><div class="dt-desc">${t.description}</div><div class="dt-amt ${t.type}">${t.type==='gasto'?'-':'+'}€${t.amount.toFixed(2)}</div></div>`).join('')}</div></div>`;
  content.innerHTML=html;
}

// ── Saldo ─────────────────────────────────────────────────────────────────────
function loadSaldo(){const s=localStorage.getItem('fin-saldo');if(s)document.getElementById('h-saldo').textContent='€'+parseFloat(s).toFixed(2);}
function editSaldo(){
  const cur=localStorage.getItem('fin-saldo')||'0';
  const val=prompt('Saldo actual de la cuenta (€):',cur);
  if(val===null)return;
  const n=parseFloat(val.replace(',','.'));
  if(isNaN(n)){alert('Valor inválido');return;}
  localStorage.setItem('fin-saldo',n.toFixed(2));
  document.getElementById('h-saldo').textContent='€'+n.toFixed(2);
}

// ── Init ──────────────────────────────────────────────────────────────────────
loadAll();
buildMonthTabs();
updateSidebar();
loadSaldo();
switchTab('txs');

if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
