// Este script maneja toda la lógica y la interacción de la interfaz de usuario del juego.


// -- DATOS Y ESTADO DEL JUEGO --
function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Datos de los personajes (1 por categoría de ejemplo)
const personajes = [
    // FUTBOL
    { nombre: 'Lionel Messi', categoria: 'futbol', imagen: '/public/assets/img/Messi.jpg' },
    { nombre: 'Cristiano Ronaldo', categoria: 'futbol', imagen: '/public/assets/img/Cristiano_Ronaldo.jpg' },
    { nombre: 'Neymar Jr', categoria: 'futbol', imagen: '/public/assets/img/Neymar_Jr.jpeg' },
    { nombre: 'Kylian Mbappé', categoria: 'futbol', imagen: '/public/assets/img/Kylian_Mbappe.png' },
    { nombre: 'Luka Modrić', categoria: 'futbol', imagen: '/public/assets/img/Luka_Modric.jpg' },
    { nombre: 'Sergio Ramos', categoria: 'futbol', imagen: '/public/assets/img/Sergio_Ramos.jpg' },
    { nombre: 'Mohamed Salah', categoria: 'futbol', imagen: '/public/assets/img/Mohamed_Salah.jpg' },
    { nombre: 'Robert Lewandowski', categoria: 'futbol', imagen: '/public/assets/img/Robert_Lewandowski.jpg' },
    { nombre: 'Erling Haaland', categoria: 'futbol', imagen: '/public/assets/img/Erling_Haaland.jpg' },
    { nombre: 'Karim Benzema', categoria: 'futbol', imagen: '/public/assets/img/Karim_Benzema.jpg' },
    { nombre: 'Kevin De Bruyne', categoria: 'futbol', imagen: '/public/assets/img/Kevin_De_Bruyne.jpg' },
    { nombre: 'Vinícius Júnior', categoria: 'futbol', imagen: '/public/assets/img/Vinicius_Junior.jpg' },
    { nombre: 'Jude Bellingham', categoria: 'futbol', imagen: '/public/assets/img/Jude_Bellingham.jpg' },
    { nombre: 'Harry Kane', categoria: 'futbol', imagen: '/public/assets/img/Harry_Kane.jpeg' },
    { nombre: 'Antoine Griezmann', categoria: 'futbol', imagen: '/public/assets/img/Antoine_Griezmann.jpg' },
    { nombre: 'Manuel Neuer', categoria: 'futbol', imagen: '/public/assets/img/Manuel_Neuer.jpg' },
    { nombre: 'Virgil van Dijk', categoria: 'futbol', imagen: '/public/assets/img/Virgil_van_Dijk.jpg' },
    { nombre: 'Frenkie de Jong', categoria: 'futbol', imagen: '/public/assets/img/Frenkie_de_Jong.jpg' },
    { nombre: 'Pedri', categoria: 'futbol', imagen: '/public/assets/img/Pedri.jpeg' },
    { nombre: 'Gavi', categoria: 'futbol', imagen: '/public/assets/img/Gavi.jpg' },
    { nombre: 'Federico Valverde', categoria: 'futbol', imagen: '/public/assets/img/Federico_Valverde.jpg' },
    { nombre: 'Rúben Dias', categoria: 'futbol', imagen: '/public/assets/img/Ruben_Dias.jpg' },
    { nombre: 'Phil Foden', categoria: 'futbol', imagen: '/public/assets/img/Phil_Foden.jpg' },
    { nombre: 'Rodrygo', categoria: 'futbol', imagen: '/public/assets/img/Rodrygo.jpg' },
    { nombre: 'Bernardo Silva', categoria: 'futbol', imagen: '/public/assets/img/Bernardo_Silva.jpg' },
    { nombre: 'Joao Félix', categoria: 'futbol', imagen: '/public/assets/img/Joao_Felix.jpg' },
    { nombre: 'Kai Havertz', categoria: 'futbol', imagen: '/public/assets/img/Kai_Havertz.jpg' },
    { nombre: 'Heung-min Son', categoria: 'futbol', imagen: '/public/assets/img/Heung_min_Son.jpg' },
    { nombre: 'Marco Verratti', categoria: 'futbol', imagen: '/public/assets/img/Marco_Verratti.jpg' },
    { nombre: 'Casemiro', categoria: 'futbol', imagen: '/public/assets/img/Casemiro.jpg' },
    { nombre: 'Pelé', categoria: 'futbol', imagen: '/public/assets/img/Pele.jpg' },
    { nombre: 'Diego Maradona', categoria: 'futbol', imagen: '/public/assets/img/Diego_Maradona.jpg' },
    { nombre: 'Johan Cruyff', categoria: 'futbol', imagen: 'Johan_Cruyff.jpg' },
    { nombre: 'Franz Beckenbauer', categoria: 'futbol', imagen: '/public/assets/img/Franz_Beckenbauer.jpg' },
    { nombre: 'Alfredo Di Stéfano', categoria: 'futbol', imagen: '/public/assets/img/Alfredo_Di_Stefano.jpg' },
    { nombre: 'Garrincha', categoria: 'futbol', imagen: '/public/assets/img/Garrincha.jpg' },
    { nombre: 'Eusébio', categoria: 'futbol', imagen: '/public/assets/img/Eusebio.jpg' },
    { nombre: 'Bobby Charlton', categoria: 'futbol', imagen: '/public/assets/img/Bobby_Charlton.jpg' },
    { nombre: 'Zico', categoria: 'futbol', imagen: '/public/assets/img/Zico.jpg' },
    { nombre: 'Michel Platini', categoria: 'futbol', imagen: 'Michel_Platini.jpg' },
    { nombre: 'Marco van Basten', categoria: 'futbol', imagen: 'Marco_van_Basten.jpg' },
    { nombre: 'Ruud Gullit', categoria: 'futbol', imagen: 'Ruud_Gullit.jpg' },
    { nombre: 'Romário', categoria: 'futbol', imagen: 'Romario.jpg' },
    { nombre: 'Bebeto', categoria: 'futbol', imagen: 'Bebeto.jpg' },
    { nombre: 'Paolo Maldini', categoria: 'futbol', imagen: 'Paolo_Maldini.jpg' },
    { nombre: 'Franco Baresi', categoria: 'futbol', imagen: 'Franco_Baresi.jpg' },
    { nombre: 'Lothar Matthäus', categoria: 'futbol', imagen: 'Lothar_Matthaus.jpg' },
    { nombre: 'Roberto Baggio', categoria: 'futbol', imagen: 'Roberto_Baggio.jpg' },
    { nombre: 'Gabriel Batistuta', categoria: 'futbol', imagen: 'Gabriel_Batistuta.jpg' },
    { nombre: 'Hristo Stoichkov', categoria: 'futbol', imagen: 'Hristo_Stoichkov.jpg' },
    { nombre: 'Alan Shearer', categoria: 'futbol', imagen: 'Alan_Shearer.jpg' },
    { nombre: 'Peter Schmeichel', categoria: 'futbol', imagen: 'Peter_Schmeichel.jpg' },
    { nombre: 'Zinedine Zidane', categoria: 'futbol', imagen: 'Zinedine_Zidane.jpg' },
    { nombre: 'Ronaldinho Gaúcho', categoria: 'futbol', imagen: 'Ronaldinho_Gaucho.jpg' },
    { nombre: 'Ronaldo Nazário', categoria: 'futbol', imagen: 'Ronaldo_Nazario.jpg' },
    { nombre: 'David Beckham', categoria: 'futbol', imagen: 'David_Beckham.jpg' },
    { nombre: 'Thierry Henry', categoria: 'futbol', imagen: 'Thierry_Henry.jpg' },
    { nombre: 'Kaká', categoria: 'futbol', imagen: 'Kaka.jpg' },
    { nombre: 'Andrea Pirlo', categoria: 'futbol', imagen: 'Andrea_Pirlo.jpg' },
    { nombre: 'Steven Gerrard', categoria: 'futbol', imagen: 'Steven_Gerrard.jpg' },
    { nombre: 'Frank Lampard', categoria: 'futbol', imagen: 'Frank_Lampard.jpg' },
    { nombre: 'Didier Drogba', categoria: 'futbol', imagen: 'Didier_Drogba.jpg' },
    { nombre: 'Dennis Bergkamp', categoria: 'futbol', imagen: 'Dennis_Bergkamp.jpg' },
    { nombre: 'Oliver Kahn', categoria: 'futbol', imagen: 'Oliver_Kahn.jpg' },
    { nombre: 'Iker Casillas', categoria: 'futbol', imagen: 'Iker_Casillas.jpg' },
    { nombre: 'Gianluigi Buffon', categoria: 'futbol', imagen: 'Gianluigi_Buffon.jpg' },
    { nombre: 'Ryan Giggs', categoria: 'futbol', imagen: 'Ryan_Giggs.jpg' },
    { nombre: 'Paul Scholes', categoria: 'futbol', imagen: 'Paul_Scholes.jpg' },
    { nombre: 'Andriy Shevchenko', categoria: 'futbol', imagen: 'Andriy_Shevchenko.jpg' },
    { nombre: 'Raúl González', categoria: 'futbol', imagen: 'Raul_Gonzalez.jpg' },
    { nombre: 'Samuel Eto\'o', categoria: 'futbol', imagen: 'Samuel_Etoo.jpg' },
    { nombre: 'Xavi Hernández', categoria: 'futbol', imagen: 'Xavi_Hernandez.jpg' },
    { nombre: 'Andrés Iniesta', categoria: 'futbol', imagen: 'Andres_Iniesta.jpg' },
    { nombre: 'Carles Puyol', categoria: 'futbol', imagen: 'Carles_Puyol.jpg' },
    { nombre: 'Gerard Piqué', categoria: 'futbol', imagen: 'Gerard_Pique.jpg' },
    { nombre: 'David Villa', categoria: 'futbol', imagen: 'David_Villa.jpg' },
    { nombre: 'Xabi Alonso', categoria: 'futbol', imagen: 'Xabi_Alonso.jpg' },
    { nombre: 'Gareth Bale', categoria: 'futbol', imagen: 'Gareth_Bale.jpg' },
    { nombre: 'Zlatan Ibrahimović', categoria: 'futbol', imagen: 'Zlatan_Ibrahimovic.jpg' },
    { nombre: 'Wayne Rooney', categoria: 'futbol', imagen: 'Wayne_Rooney.jpg' },
    { nombre: 'Arjen Robben', categoria: 'futbol', imagen: 'Arjen_Robben.jpg' },
    { nombre: 'Wesley Sneijder', categoria: 'futbol', imagen: 'Wesley_Sneijder.jpg' },
    { nombre: 'Clarence Seedorf', categoria: 'futbol', imagen: 'Clarence_Seedorf.jpg' },
    { nombre: 'Philipp Lahm', categoria: 'futbol', imagen: 'Philipp_Lahm.jpg' },
    { nombre: 'Bastian Schweinsteiger', categoria: 'futbol', imagen: 'Bastian_Schweinsteiger.jpg' },
    { nombre: 'Miroslav Klose', categoria: 'futbol', imagen: 'Miroslav_Klose.jpg' },
    { nombre: 'Edinson Cavani', categoria: 'futbol', imagen: 'Edinson_Cavani.jpg' },
    { nombre: 'Luis Suárez', categoria: 'futbol', imagen: 'Luis_Suarez.jpg' },
    { nombre: 'Eden Hazard', categoria: 'futbol', imagen: 'Eden_Hazard.jpg' },
    { nombre: 'Ángel Di María', categoria: 'futbol', imagen: 'Angel_Di_Maria.jpg' },
    { nombre: 'Sergio Agüero', categoria: 'futbol', imagen: 'Sergio_Aguero.jpg' },
    { nombre: 'Roberto Carlos', categoria: 'futbol', imagen: 'Roberto_Carlos.jpg' },
    { nombre: 'Cafu', categoria: 'futbol', imagen: 'Cafu.jpg' },
    { nombre: 'Lilian Thuram', categoria: 'futbol', imagen: 'Lilian_Thuram.jpg' },
    { nombre: 'Claude Makélélé', categoria: 'futbol', imagen: 'Claude_Makelele.jpg' },
    { nombre: 'Patrick Vieira', categoria: 'futbol', imagen: 'Patrick_Vieira.jpg' },
    { nombre: 'Yaya Touré', categoria: 'futbol', imagen: 'Yaya_Toure.jpg' },
    { nombre: 'N\'Golo Kanté', categoria: 'futbol', imagen: 'N\'Golo_Kante.jpg' },
    { nombre: 'Sergio Busquets', categoria: 'futbol', imagen: 'Sergio_Busquets.jpg' },
    { nombre: 'Thiago Silva', categoria: 'futbol', imagen: 'Thiago_Silva.jpg' },
    { nombre: 'Kalidou Koulibaly', categoria: 'futbol', imagen: 'Kalidou_Koulibaly.jpg' },
    { nombre: 'Aymeric Laporte', categoria: 'futbol', imagen: 'Aymeric_Laporte.jpg' },
    { nombre: 'Jordi Alba', categoria: 'futbol', imagen: 'Jordi_Alba.jpg' },
    { nombre: 'Marcelo Vieira', categoria: 'futbol', imagen: 'Marcelo_Vieira.jpg' },
    { nombre: 'David Alaba', categoria: 'futbol', imagen: 'David_Alaba.jpg' },
    { nombre: 'Raphaël Varane', categoria: 'futbol', imagen: 'Raphael_Varane.jpg' },

    // 🎤 Cantantes
    { nombre: 'Shakira', categoria: 'cantantes', imagen: '/public/assets/img/Shakira.png' },
    { nombre: 'Freddie Mercury', categoria: 'cantantes', imagen: '/public/assets/img/Freddie_Mercury.jpg' },
    { nombre: 'Duki', categoria: 'cantantes', imagen: '/public/assets/img/Duki.jpg' },
    { nombre: 'Emilia Mernes', categoria: 'cantantes', imagen: '/public/assets/img/Emilia_Mernes.png' },
    { nombre: 'Taylor Swift', categoria: 'cantantes', imagen: '/public/assets/img/Taylor_Swift.png' },
    { nombre: 'Ed Sheeran', categoria: 'cantantes', imagen: '/public/assets/img/Ed_Sheeran.jpg' },
    { nombre: 'Ariana Grande', categoria: 'cantantes', imagen: '/public/assets/img/Ariana_Grande.jpeg' },
    { nombre: 'Bad Bunny', categoria: 'cantantes', imagen: '/public/assets/img/Bad_Bunny.jpg' },
    { nombre: 'Billie Eilish', categoria: 'cantantes', imagen: '/public/assets/img/Billie_Eilish.jpeg' },
    { nombre: 'The Weeknd', categoria: 'cantantes', imagen: '/public/assets/img/The_Weeknd.jpg' },
    { nombre: 'Selena Gomez', categoria: 'cantantes', imagen: '/public/assets/img/Selena_Gomez.png' },
    { nombre: 'Dua Lipa', categoria: 'cantantes', imagen: '/public/assets/img/Dua_Lipa.jpeg' },
    { nombre: 'Justin Bieber', categoria: 'cantantes', imagen: '/public/assets/img/Justin_Bieber.jpg' },
    { nombre: 'Lady Gaga', categoria: 'cantantes', imagen: '/public/assets/img/Lady_Gaga.jpg' },
    { nombre: 'Rihanna', categoria: 'cantantes', imagen: '/public/assets/img/Rihanna.png' },
    { nombre: 'Katy Perry', categoria: 'cantantes', imagen: '/public/assets/img/Katy_Perry.jpg' },
    { nombre: 'Michael Jackson', categoria: 'cantantes', imagen: '/public/assets/img/Michael_Jackson.jpg' },
    { nombre: 'Elvis Presley', categoria: 'cantantes', imagen: '/public/assets/img/Elvis_Presley.jpg' },
    { nombre: 'Whitney Houston', categoria: 'cantantes', imagen: '/public/assets/img/Whitney_Houston.png' },
    { nombre: 'Adele', categoria: 'cantantes', imagen: '/public/assets/img/Adele.jpg' },
    { nombre: 'Beyoncé', categoria: 'cantantes', imagen: '/public/assets/img/Beyonce.jpg' },
    { nombre: 'Bruno Mars', categoria: 'cantantes', imagen: '/public/assets/img/Bruno_Mars.jpg' },
    { nombre: 'Bob Marley', categoria: 'cantantes', imagen: '/public/assets/img/Bob_Marley.jpg' },
    { nombre: 'Luis Miguel', categoria: 'cantantes', imagen: '/public/assets/img/Luis_Miguel.jpg' },
    { nombre: 'Charly García', categoria: 'cantantes', imagen: '/public/assets/img/Charly_Garcia.jpeg' },
    { nombre: 'Gustavo Cerati', categoria: 'cantantes', imagen: '/public/assets/img/Gustavo_Cerati.jpg' },
    { nombre: 'Andrés Calamaro', categoria: 'cantantes', imagen: '/public/assets/img/Andres_Calamaro.jpg' },
    { nombre: 'Soda Stereo', categoria: 'cantantes', imagen: '/public/assets/img/Soda_Stereo.png' },
    { nombre: 'Trueno', categoria: 'cantantes', imagen: '/public/assets/img/Trueno.jpg' },
    { nombre: 'Nicki Nicole', categoria: 'cantantes', imagen: '/public/assets/img/Nicki_Nicole.jpeg' },
    { nombre: 'Maria Becerra', categoria: 'cantantes', imagen: '/public/assets/img/Maria_Becerra.jpeg' },
    { nombre: 'Tini Stoessel', categoria: 'cantantes', imagen: '/public/assets/img/Tini_Stoessel.jpeg' },
    { nombre: 'Nathy Peluso', categoria: 'cantantes', imagen: '/public/assets/img/Nathy_Peluso.jpeg' },
    { nombre: 'Lali Espósito', categoria: 'cantantes', imagen: '/public/assets/img/Lali_Esposito.jpeg' },
    { nombre: 'Green Day', categoria: 'cantantes', imagen: '/public/assets/img/Green_Day.jpg' },
    { nombre: 'Guns N\' Roses', categoria: 'cantantes', imagen: '/public/assets/img/Guns_N_Roses.jpg' },
    { nombre: 'Red Hot Chili Peppers', categoria: 'cantantes', imagen: '/public/assets/img/Red_Hot_Chili_Peppers.png' },
    { nombre: 'Dillom', categoria: 'cantantes', imagen: '/public/assets/img/Dillom.jpg' },
    { nombre: 'Cazzu', categoria: 'cantantes', imagen: '/public/assets/img/Cazzu.jpg' },
    { nombre: 'Chayanne', categoria: 'cantantes', imagen: '/public/assets/img/Chayanne.jpg' },
    { nombre: 'Paco Amoroso', categoria: 'cantantes', imagen: '/public/assets/img/Paco_Amoroso.jpg' },
    { nombre: 'Catriel', categoria: 'cantantes', imagen: '/public/assets/img/Catriel.jpg' },
    { nombre: 'Bizarrap', categoria: 'cantantes', imagen: '/public/assets/img/Bizarrap.jpg' },
    { nombre: 'Quevedo', categoria: 'cantantes', imagen: '/public/assets/img/Quevedo.jpg' },
    { nombre: 'Agus Padilla', categoria: 'cantantes', imagen: '/public/assets/img/Agus_Padilla.jpeg' },
    { nombre: 'Miranda!', categoria: 'cantantes', imagen: '/public/assets/img/Miranda.jpg' },
    { nombre: 'Daddy Yankee', categoria: 'cantantes', imagen: '/public/assets/img/Daddy_Yankee.jpeg' },
    { nombre: 'Don Omar', categoria: 'cantantes', imagen: '/public/assets/img/Don_Omar.jpeg' },
    { nombre: 'Wisin', categoria: 'cantantes', imagen: '/public/assets/img/Wisin.jpg' },
    { nombre: 'Yandel', categoria: 'cantantes', imagen: '/public/assets/img/Yandel.jpg' },
    { nombre: 'Nicky Jam', categoria: 'cantantes', imagen: '/public/assets/img/Nicky_Jam.jpg' },
    { nombre: 'J Balvin', categoria: 'cantantes', imagen: '/public/assets/img/J_Balvin.jpg' },
    { nombre: 'Maluma', categoria: 'cantantes', imagen: '/public/assets/img/Maluma.jpg' },
    { nombre: 'Ozuna', categoria: 'cantantes', imagen: '/public/assets/img/Ozuna.jpeg' },
    { nombre: 'Anuel AA', categoria: 'cantantes', imagen: '/public/assets/img/Anuel_AA.jpg' },
    { nombre: 'Karol G', categoria: 'cantantes', imagen: '/public/assets/img/Karol_G.jpg' },
    { nombre: 'Sech', categoria: 'cantantes', imagen: '/public/assets/img/Sech.jpeg' },
    { nombre: 'Feid', categoria: 'cantantes', imagen: '/public/assets/img/Feid.jpeg' },
    { nombre: 'Bhavi', categoria: 'cantantes', imagen: '/public/assets/img/Bhavi.jpg' },

    // Random Famosos
    { nombre: 'Ricardo Fort', categoria: 'Random', imagen: '/public/assets/img/Ricardo_Fort.jpg' },
    { nombre: 'Moria Casán', categoria: 'Random', imagen: '/public/assets/img/Moria_Casan.jpg' },
    { nombre: 'China Suárez', categoria: 'Random', imagen: '/public/assets/img/China_Suarez.jpg' },
    { nombre: 'Guillermo Francella', categoria: 'Random', imagen: '/public/assets/img/Guillermo_Francella.jpg' },
    { nombre: 'Guido Kaczka', categoria: 'Random', imagen: '/public/assets/img/Guido_Kaczka.jpeg' },
    { nombre: 'Pampita', categoria: 'Random', imagen: '/public/assets/img/Pampita.jpg' },
    { nombre: 'Wanda Nara', categoria: 'Random', imagen: '/public/assets/img/Wanda_Nara.jpeg' },
    { nombre: 'Marcelo Tinelli', categoria: 'Random', imagen: '/public/assets/img/Marcelo_Tinelli.jpeg' },
    { nombre: 'Susana Giménez', categoria: 'Random', imagen: '/public/assets/img/Susana_Gimenez.jpeg' },
    { nombre: 'Mirtha Legrand', categoria: 'Random', imagen: '/public/assets/img/Mirtha_Legrand.jpeg' },
    { nombre: 'Mauricio Macri', categoria: 'Random', imagen: '/public/assets/img/Mauricio_Macri.jpg' },
    { nombre: 'Cristina Kirchner', categoria: 'Random', imagen: '/public/assets/img/Cristina_Kirchner.jpg' },
    { nombre: 'Javier Milei', categoria: 'Random', imagen: '/public/assets/img/Javier_Milei.jpeg' },
    { nombre: 'Alberto Fernández', categoria: 'Random', imagen: '/public/assets/img/Alberto_Fernandez.jpg' },
    { nombre: 'Carlos Menem', categoria: 'Random', imagen: '/public/assets/img/Carlos_Menem.jpg' },
    { nombre: 'Ernesto Che Guevara', categoria: 'Random', imagen: '/public/assets/img/Che_Guevara.jpg' },
    { nombre: 'Papa Francisco', categoria: 'Random', imagen: '/public/assets/img/Papa_Francisco.jpg' },
    { nombre: 'Donald Trump', categoria: 'Random', imagen: 'Donald_Trump.jpg' },
    { nombre: 'Joe Biden', categoria: 'Random', imagen: 'Joe_Biden.jpg' },
    { nombre: 'Fidel Castro', categoria: 'Random', imagen: 'Fidel_Castro.jpg' },
    { nombre: 'Stephen Hawking', categoria: 'Random', imagen: 'Stephen_Hawking.jpg' },
    { nombre: 'Albert Einstein', categoria: 'Random', imagen: 'Albert_Einstein.jpg' },
    { nombre: 'Adolf Hitler', categoria: 'Random', imagen: 'Adolf_Hitler.jpg' },
    { nombre: 'Leonardo da Vinci', categoria: 'Random', imagen: 'Leonardo_da_Vinci.jpeg' },
    { nombre: 'Marilyn Monroe', categoria: 'Random', imagen: 'Marilyn_Monroe.jpg' },
    { nombre: 'Michael Jackson', categoria: 'Random', imagen: 'Michael_Jackson.jpg' },
    { nombre: 'Elvis Presley', categoria: 'Random', imagen: 'Elvis_Presley.jpg' },
    { nombre: 'Cleopatra', categoria: 'Random', imagen: 'Cleopatra.jpeg' },
    { nombre: 'Julio César', categoria: 'Random', imagen: 'Julio_Cesar.jpeg' },
    { nombre: 'Spider-Man', categoria: 'Random', imagen: 'Spider_Man.jpg' },
    { nombre: 'Goku', categoria: 'Random', imagen: 'Goku.jpg' },
    { nombre: 'Vegeta', categoria: 'Random', imagen: 'Vegeta.jpg' },
    { nombre: 'Batman', categoria: 'Random', imagen: 'Batman.jpeg' },
    { nombre: 'Yoda', categoria: 'Random', imagen: 'Yoda.png' },
    { nombre: 'Terminator', categoria: 'Random', imagen: 'Terminator.jpg' },
    { nombre: 'Rambo', categoria: 'Random', imagen: 'Rambo.jpg' },
    { nombre: 'Voldemort', categoria: 'Random', imagen: 'Voldemort.jpg' },
    { nombre: 'Shrek', categoria: 'Random', imagen: 'Shrek.jpeg' },
    { nombre: 'Mario Bros', categoria: 'Random', imagen: 'Mario_Bros.jpg' },
    { nombre: 'Pikachu', categoria: 'Random', imagen: 'Pikachu.jpg' },
    { nombre: 'Deadpool', categoria: 'Random', imagen: 'Deadpool.jpg' },
    { nombre: 'Sub-Zero', categoria: 'Random', imagen: 'Sub_Zero.jpeg' },
    { nombre: 'Scorpion', categoria: 'Random', imagen: 'Scorpion.jpg' },
    { nombre: 'Jack Sparrow', categoria: 'Random', imagen: 'Jack_Sparrow.jpeg' },
    { nombre: 'Darth Vader', categoria: 'Random', imagen: 'Darth_Vader.jpg' },
    { nombre: 'Harry Potter', categoria: 'Random', imagen: 'Harry_Potter.jpg' },
    { nombre: 'Iron Man', categoria: 'Random', imagen: 'Iron_Man.jpg' },
    { nombre: 'Homero Simpson', categoria: 'Random', imagen: 'Homero_Simpson.jpg' },
    { nombre: 'Buzz Lightyear', categoria: 'Random', imagen: 'Buzz_Lightyear.jpg' },
    { nombre: 'James Bond', categoria: 'Random', imagen: 'James_Bond.jpeg' },
    { nombre: 'Godzilla', categoria: 'Random', imagen: 'Godzilla.jpeg' },
    { nombre: 'Sherlock Holmes', categoria: 'Random', imagen: 'Sherlock_Holmes.jpg' },
    { nombre: 'Chucky', categoria: 'Random', imagen: 'Chucky.jpg' },
    { nombre: 'Optimus Prime', categoria: 'Random', imagen: 'Optimus_Prime.jpg' },

    // HISTORICOS
    { nombre: 'Napoleon Bonaparte', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Napoleon_Bonaparte_by_Jacques-Louis_David.jpg' },
    { nombre: 'Albert Einstein', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg' },
    { nombre: 'San Martin', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Jose_de_San_Martin.jpg' },
    { nombre: 'Belgrano', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Manuel_Belgrano.jpg' },
    { nombre: 'George Washington', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/George_Washington_by_Gilbert_Stuart%2C_1796.jpg' },
    { nombre: 'Cleopatra', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Cleopatra_VII_Ptolemaic.jpg' },
    { nombre: 'Julius Caesar', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Gaius_Julius_Caesar_%28Vatican_Museum%29.jpg' },
    { nombre: 'Winston Churchill', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Winston_Churchill_1942.jpg' },
    { nombre: 'Martin Luther King Jr.', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Martin_Luther_King_Jr_NYWTS.jpg' },
    { nombre: 'Nelson Mandela', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nelson_Mandela_1994.jpg' },
    { nombre: 'Abraham Lincoln', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Abraham_Lincoln_November_1863.jpg' },
    { nombre: 'Alexander the Great', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Alexander_the_Great_mosaic.jpg' },
    { nombre: 'Genghis Khan', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Genghis_Khan_portrait.jpg' },
    { nombre: 'Leonardo da Vinci', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg' },
    { nombre: 'Joan of Arc', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Joan_of_Arc_miniature_graded.jpg' },
    { nombre: 'Sherlock Holmes', categoria: 'historicos', imagen: 'https://upload.wikimedia.org/wikipedia/en/6/66/Benedict_Cumberbatch_as_Sherlock.jpg' },

    // TELEVISIÓN
    { nombre: 'Walter White', categoria: 'television', imagen: 'https://upload.wikimedia.org/wikipedia/en/6/65/Walter_White_S5B.png' },
    { nombre: 'Tony Soprano', categoria: 'television', imagen: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Tony_Soprano_1999.jpg' },
    { nombre: 'Daenerys Targaryen', categoria: 'television', imagen: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Daenerys_Targaryen_Season_8.png' },
    { nombre: 'Rick Grimes', categoria: 'television', imagen: 'https://upload.wikimedia.org/wikipedia/en/0/00/Rick_Grimes_S5.jpg' },

    // POLÍTICA - Lista ampliada
    { nombre: 'Barack Obama', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg' },
    { nombre: 'Donald Trump', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg' },
    { nombre: 'Angela Merkel', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Angela_Merkel_2019.jpg' },
    { nombre: 'Vladimir Putin', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Vladimir_Putin_2019.jpg' },
    { nombre: 'Xi Jinping', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Xi_Jinping_2019.jpg' },
    { nombre: 'Joe Biden', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg' },
    { nombre: 'Kamala Harris', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Kamala_Harris_official_portrait.jpg' },
    { nombre: 'Emmanuel Macron', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Emmanuel_Macron_%28cropped%29.jpg' },
    { nombre: 'Boris Johnson', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Boris_Johnson_2020.jpg' },
    { nombre: 'Justin Trudeau', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Justin_Trudeau_2017.jpg' },
    { nombre: 'Narendra Modi', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Narendra_Modi_2015.jpg' },
    { nombre: 'Recep Tayyip Erdoğan', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Recep_Tayyip_Erdoğan_2020.jpg' },
    { nombre: 'Fidel Castro', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Fidel_Castro_1961.jpg' },
    { nombre: 'Hugo Chávez', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Hugo_Chavez_2012.jpg' },
    { nombre: 'Evo Morales', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Evo_Morales_-_Bolivia_2010.jpg' },
    { nombre: 'Juan Domingo Perón', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Juan_Domingo_Perón.jpg' },
    { nombre: 'Cristina Fernández de Kirchner', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Cristina_Kirchner_2012.jpg' },
    { nombre: 'Mauricio Macri', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Mauricio_Macri_2016.jpg' },
    { nombre: 'Salvador Allende', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Salvador_Allende.jpg' },
    { nombre: 'Angela Davis', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Angela_Davis_1972.jpg' },
    { nombre: 'Che Guevara', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/CheHigh.jpg' },
    { nombre: 'Simón Bolívar', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Simón_Bolívar_by_Francesco_Podesti.jpg' },
    { nombre: 'José de San Martín', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/José_de_San_Martín.jpg' },
    { nombre: 'Winston Churchill', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Churchill_portrait_NYP_45063.jpg' },
    { nombre: 'Franklin D. Roosevelt', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/FDR_in_1933.jpg' },
    { nombre: 'Theodore Roosevelt', categoria: 'politica', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Theodore_Roosevelt_by_C.F._Berger.jpg' },

    // DEPORTES (no fútbol)
    { nombre: 'Michael Jordan', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Michael_Jordan_in_2014.jpg' },
    { nombre: 'LeBron James', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/75/LeBron_James_2018.jpg' },
    { nombre: 'Stephen Curry', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Stephen_Curry_2021.jpg' },
    { nombre: 'Nikola Jokić', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Nikola_Jokic_2021.jpg' },
    { nombre: 'Luka Dončić', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Luka_Don%C4%8Di%C4%87_2020.jpg' },
    { nombre: 'Joel Embiid', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Joel_Embiid_2021.jpg' },
    { nombre: 'Kevin Durant', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Kevin_Durant_2021.jpg' },
    { nombre: 'Giannis Antetokounmpo', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Giannis_Antetokounmpo_2020.jpg' },
    { nombre: 'Novak Djokovic', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Novak_Djokovic_2022.jpg' },
    { nombre: 'Rafael Nadal', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Rafael_Nadal_2022.jpg' },
    { nombre: 'Roger Federer', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Roger_Federer_(Australian_Open_2017)_2.jpg' },
    { nombre: 'Serena Williams', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Serena_Williams_2013.jpg' },
    { nombre: 'Carlos Alcaraz', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Carlos_Alcaraz_2023.jpg' },
    { nombre: 'Lewis Hamilton', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Lewis_Hamilton_2022.jpg' },
    { nombre: 'Max Verstappen', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Max_Verstappen_2022.jpg' },
    { nombre: 'Fernando Alonso', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Fernando_Alonso_2022.jpg' },
    { nombre: 'Charles Leclerc', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Charles_Leclerc_2022.jpg' },
    { nombre: 'Checo Pérez', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Sergio_Perez_2022.jpg' },
    { nombre: 'Tom Brady', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Tom_Brady_2021.jpg' },
    { nombre: 'Patrick Mahomes', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Patrick_Mahomes_2021.jpg' },
    { nombre: 'Simone Biles', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Simone_Biles_2016.jpg' },
    { nombre: 'Usain Bolt', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Usain_Bolt.jpg' },
    { nombre: 'Katie Ledecky', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Katie_Ledecky_2021.jpg' },
    { nombre: 'Mike Tyson', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Mike_Tyson_2019.jpg' },
    { nombre: 'Canelo Álvarez', categoria: 'deportes', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Canelo_%C3%81lvarez_2021.jpg' },

    // CINE - Lista gigante
    { nombre: 'Robert Downey Jr.', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Robert_Downey_Jr_2014.jpg' },
    { nombre: 'Scarlett Johansson', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Scarlett_Johansson_by_Gage_Skidmore_2.jpg' },
    { nombre: 'Leonardo DiCaprio', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Leonardo_DiCaprio_66ème_Festival_de_Venise.jpg' },
    { nombre: 'Tom Hanks', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tom_Hanks_TIFF_2019.jpg' },
    { nombre: 'Natalie Portman', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Natalie_Portman_2018.jpg' },
    { nombre: 'Morgan Freeman', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Morgan_Freeman_2006.jpg' },
    { nombre: 'Meryl Streep', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Meryl_Streep_February_2016.jpg' },
    { nombre: 'Brad Pitt', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Brad_Pitt_Fury_2014.jpg' },
    { nombre: 'Angelina Jolie', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Angelina_Jolie_2_June_2014.jpg' },
    { nombre: 'Johnny Depp', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Johnny_Depp_2018.jpg' },
    { nombre: 'Emma Stone', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Emma_Stone_2018.jpg' },
    { nombre: 'Chris Hemsworth', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Chris_Hemsworth_by_Gage_Skidmore_2.jpg' },
    { nombre: 'Chris Evans', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Chris_Evans_by_Gage_Skidmore_2.jpg' },
    { nombre: 'Gal Gadot', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Gal_Gadot_by_Gage_Skidmore.jpg' },
    { nombre: 'Hugh Jackman', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hugh_Jackman_2014.jpg' },
    { nombre: 'Matt Damon', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Matt_Damon_2015.jpg' },
    { nombre: 'Anne Hathaway', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Anne_Hathaway_2015.jpg' },
    { nombre: 'Will Smith', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Will_Smith_2011.jpg' },
    { nombre: 'Denzel Washington', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Denzel_Washington_2011.jpg' },
    { nombre: 'Emma Watson', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Emma_Watson_2013.jpg' },
    { nombre: 'Keanu Reeves', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Keanu_Reeves_2014.jpg' },
    { nombre: 'Morgan Freeman', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Morgan_Freeman_2006.jpg' },
    { nombre: 'Jodie Foster', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Jodie_Foster_by_Gage_Skidmore.jpg' },
    { nombre: 'Clint Eastwood', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Clint_Eastwood_by_Gage_Skidmore.jpg' },
    { nombre: 'Samuel L. Jackson', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Samuel_L_Jackson_2014.jpg' },
    { nombre: 'Nicole Kidman', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Nicole_Kidman_2018.jpg' },
    { nombre: 'Kate Winslet', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Kate_Winslet_2011.jpg' },
    { nombre: 'Robert De Niro', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Robert_De_Niro_2011.jpg' },
    { nombre: 'Al Pacino', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Al_Pacino_2011.jpg' },
    { nombre: 'Natalie Dormer', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Natalie_Dormer_2018.jpg' },
    { nombre: 'Vin Diesel', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Vin_Diesel_2018.jpg' },
    { nombre: 'Galileo Gal Gadot', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Gal_Gadot_by_Gage_Skidmore.jpg' },
    { nombre: 'Charlize Theron', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Charlize_Theron_2013.jpg' },
    { nombre: 'Jessica Chastain', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Jessica_Chastain_2012.jpg' },
    { nombre: 'Mark Ruffalo', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Mark_Ruffalo_2017.jpg' },
    { nombre: 'Chris Pratt', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Chris_Pratt_2018.jpg' },
    { nombre: 'Zoe Saldana', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Zoe_Saldana_2017.jpg' },
    { nombre: 'Tom Hardy', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Tom_Hardy_2015.jpg' },
    { nombre: 'Rami Malek', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Rami_Malek_2019.jpg' },
    { nombre: 'Gal Gadot', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Gal_Gadot_by_Gage_Skidmore.jpg' },
    { nombre: 'Eva Green', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Eva_Green_2016.jpg' },
    { nombre: 'Harrison Ford', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Harrison_Ford_2015.jpg' },
    { nombre: 'Heath Ledger', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Heath_Ledger_Cannes_2006.jpg' },
    { nombre: 'Joaquin Phoenix', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Joaquin_Phoenix_2018.jpg' },
    { nombre: 'Cillian Murphy', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Cillian_Murphy_2019.jpg' },
    { nombre: 'Timothée Chalamet', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Timothée_Chalamet_2019.jpg' },
    { nombre: 'Florence Pugh', categoria: 'cine', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Florence_Pugh_2019.jpg' },

    // CIENCIA
    { nombre: 'Isaac Newton', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Sir_Isaac_Newton_%28ME%29.jpg' },
    { nombre: 'Marie Curie', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Marie_Curie_c1920.jpg' },
    { nombre: 'Nikola Tesla', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG' },
    { nombre: 'Stephen Hawking', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg' },
    { nombre: 'Albert Einstein', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg' },
    { nombre: 'Galileo Galilei', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Galileo.arp.300pix.jpg' },
    { nombre: 'Charles Darwin', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Charles_Darwin_1880.jpg' },
    { nombre: 'Carl Sagan', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Carl_Sagan_Portrait.jpg' },
    { nombre: 'Richard Feynman', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Richard_Feynman_Nobel.jpg' },
    { nombre: 'Rosalind Franklin', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rosalind_Franklin.jpg' },
    { nombre: 'Dmitri Mendeléyev', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Dmitri_Mendeleev_1897.jpg' },
    { nombre: 'James Clerk Maxwell', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/James_Clerk_Maxwell_1879.jpg' },
    { nombre: 'Niels Bohr', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Niels_Bohr.jpg' },
    { nombre: 'Gregor Mendel', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Gregor_Mendel_2.jpg' },
    { nombre: 'Jane Goodall', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Jane_Goodall_2015.jpg' },
    { nombre: 'Richard Dawkins', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Richard_Dawkins_2012.jpg' },
    { nombre: 'Alan Turing', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg' },
    { nombre: 'Barbara McClintock', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Barbara_McClintock_1970.jpg' },
    { nombre: 'Johannes Kepler', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Portrait_of_Johannes_Kepler.jpg' },
    { nombre: 'Tim Berners-Lee', categoria: 'ciencia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Tim_Berners-Lee_cropped.jpg' },
    
    // 🎮 VIDEOJUEGOS
    { nombre: 'Mario', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png' },
    { nombre: 'Luigi', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/24/Luigi_Mario.png' },
    { nombre: 'Peach', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/23/Peach_Mario.png' },
    { nombre: 'Bowser', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Bowser_Super_Mario.png' },
    { nombre: 'Yoshi', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/4/41/Yoshi_SMB.png' },
    { nombre: 'Link', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Link_TBOTW.png' },
    { nombre: 'Zelda', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Zelda_Breath_of_the_Wild.png' },
    { nombre: 'Ganondorf', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Ganondorf_TLOZ.png' },
    { nombre: 'Samus Aran', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Samus_Aran_Metroid.png' },
    { nombre: 'Ridley', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Ridley_Metroid.png' },
    { nombre: 'Lara Croft', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Lara_Croft_Reboot.png' },
    { nombre: 'Master Chief', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Master_Chief_Halo.png' },
    { nombre: 'Cortana', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/9/92/Cortana_Halo.png' },
    { nombre: 'Kratos', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Kratos_God_of_War.png' },
    { nombre: 'Atreus', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Atreus_God_of_War.png' },
    { nombre: 'Solid Snake', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Solid_Snake.png' },
    { nombre: 'Raiden', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Raiden_MG.png' },
    { nombre: 'Cloud Strife', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/0/01/Cloud_Strife.png' },
    { nombre: 'Sephiroth', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Sephiroth_FF.png' },
    { nombre: 'Tifa Lockhart', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/31/Tifa_Lockhart.png' },
    { nombre: 'Aerith Gainsborough', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/8/84/Aerith_Gainsborough.png' },
    { nombre: 'Geralt de Rivia', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Geralt_de_Rivia_Witcher.png' },
    { nombre: 'Jaskier', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Jaskier_Witcher.png' },
    { nombre: 'Doom Slayer', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Doom_Slayer.png' },
    { nombre: 'Marcus Fenix', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Marcus_Fenix_Gears.png' },
    { nombre: 'Dom Santiago', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/1/16/Dom_Santiago_Gears.png' },
    { nombre: 'Tommy Vercetti', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Tommy_Vercetti_GTA.png' },
    { nombre: 'CJ', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/5/55/CJ_GTA.png' },
    { nombre: 'Niko Bellic', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Niko_Bellic_GTA.png' },
    { nombre: 'Sonic', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Sonic_the_Hedgehog.png' },
    { nombre: 'Tails', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Tails.png' },
    { nombre: 'Knuckles', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Knuckles_the_Echidna.png' },
    { nombre: 'Shadow', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Shadow_the_Hedgehog.png' },
    { nombre: 'Mega Man', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Mega_Man.png' },
    { nombre: 'Proto Man', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Proto_Man.png' },
    { nombre: 'Pac-Man', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/27/Pac-Man.png' },
    { nombre: 'Ms. Pac-Man', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/8/87/Ms_Pac_Man.png' },
    { nombre: 'Donkey Kong', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/7/73/Donkey_Kong.png' },
    { nombre: 'Diddy Kong', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Diddy_Kong.png' },
    { nombre: 'Ryu', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Ryu_Street_Fighter.png' },
    { nombre: 'Ken Masters', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Ken_Street_Fighter.png' },
    { nombre: 'Chun-Li', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/4/46/Chun_Li_Street_Fighter.png' },
    { nombre: 'Guile', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/7/79/Guile_Street_Fighter.png' },
    { nombre: 'M. Bison', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/37/M_Bison_Street_Fighter.png' },
    { nombre: 'Scorpion', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Scorpion_MK.png' },
    { nombre: 'Sub-Zero', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/21/Sub-Zero_MK.png' },
    { nombre: 'Liu Kang', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/4/44/Liu_Kang_MK.png' },
    { nombre: 'Raiden_MK', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Raiden_MK.png' },
    { nombre: 'Johnny Cage', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Johnny_Cage_MK.png' },
    { nombre: 'Kitana', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Kitana_MK.png' },
    { nombre: 'Joker', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Joker_MK.png' },
    { nombre: 'Ellie', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Ellie_TLOU.png' },
    { nombre: 'Joel', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Joel_TLOU.png' },
    { nombre: 'Arthur Morgan', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Arthur_Morgan_RDR2.png' },
    { nombre: 'John Marston', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e6/John_Marston_RDR.png' },
    { nombre: 'CJ', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/5/55/CJ_GTA.png' },
    { nombre: 'Gordon Freeman', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/6/63/Gordon_Freeman_HL.png' },
    { nombre: 'Alyx Vance', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/26/Alyx_Vance_HL.png' },
    { nombre: 'Leon S. Kennedy', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Leon_S_Kennedy.png' },
    { nombre: 'Claire Redfield', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/6/64/Claire_Redfield.png' },
    { nombre: 'Jill Valentine', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/1/14/Jill_Valentine.png' },
    { nombre: 'Chris Redfield', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Chris_Redfield.png' },
    { nombre: 'Albert Wesker', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Albert_Wesker.png' },
    { nombre: 'Spyro', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Spyro.png' },
    { nombre: 'Crash Bandicoot', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Crash_Bandicoot.png' },
    { nombre: 'Coco Bandicoot', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Coco_Bandicoot.png' },
    { nombre: 'Spyro', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Spyro.png' },
    // 🎮 VIDEOJUEGOS - Parte 2
    { nombre: 'Ivern', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/34/Ivern_League_of_Legends.png' },
    { nombre: 'Ahri', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Ahri_League_of_Legends.png' },
    { nombre: 'Yasuo', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Yasuo_League_of_Legends.png' },
    { nombre: 'Jinx', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/8/85/Jinx_League_of_Legends.png' },
    { nombre: 'Teemo', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Teemo_League_of_Legends.png' },
    { nombre: 'Lux', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Lux_League_of_Legends.png' },
    { nombre: 'Garen', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Garen_League_of_Legends.png' },
    { nombre: 'Darius', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/6/60/Darius_League_of_Legends.png' },
    { nombre: 'Steve', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Steve_Minecraft.png' },
    { nombre: 'Alex', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/5/55/Alex_Minecraft.png' },
    { nombre: 'Enderman', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Enderman_Minecraft.png' },
    { nombre: 'Creeper', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Creeper_Minecraft.png' },
    { nombre: 'Tracer', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/9/90/Tracer_Overwatch.png' },
    { nombre: 'Reaper', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Reaper_Overwatch.png' },
    { nombre: 'Genji', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/8/87/Genji_Overwatch.png' },
    { nombre: 'Widowmaker', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/4/42/Widowmaker_Overwatch.png' },
    { nombre: 'Ragnarok', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/4/44/Ragnarok_Fortnite.png' },
    { nombre: 'Jonesy', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/1/10/Jonesy_Fortnite.png' },
    { nombre: 'Bangalore', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Bangalore_Apex_Legends.png' },
    { nombre: 'Wraith', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Wraith_Apex_Legends.png' },
    { nombre: 'Bloodhound', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/6/66/Bloodhound_Apex_Legends.png' },
    { nombre: 'Pikachu', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/9/98/Pikachu.png' },
    { nombre: 'Charizard', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Charizard.png' },
    { nombre: 'Bulbasaur', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Bulbasaur.png' },
    { nombre: 'Squirtle', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/39/Squirtle.png' },
    { nombre: 'Aloy', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Aloy_Horizon.png' },
    { nombre: 'Doomfist', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/34/Doomfist_Overwatch.png' },
    { nombre: 'Hanzo', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Hanzo_Overwatch.png' },
    { nombre: 'Sombra', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Sombra_Overwatch.png' },
    { nombre: 'Mccree', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/2e/McCree_Overwatch.png' },
    { nombre: 'Eevee', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Eevee.png' },
    { nombre: 'Mewtwo', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Mewtwo.png' },
    { nombre: 'Geralt de Rivia', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Geralt_de_Rivia_Witcher.png' },
    { nombre: 'Ciri', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Ciri_Witcher.png' },
    { nombre: 'Yennefer', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Yennefer_Witcher.png' },
    { nombre: 'Dovahkiin', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/4/44/Dovahkiin_Skyrim.png' },
    { nombre: 'Aela', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/8/86/Aela_Skyrim.png' },
    { nombre: 'Dragonborn', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/4/44/Dovahkiin_Skyrim.png' },
    { nombre: 'Leonardo', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Leonardo_TMNT.png' },
    { nombre: 'Michelangelo', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Michelangelo_TMNT.png' },
    { nombre: 'Donatello', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/4/48/Donatello_TMNT.png' },
    { nombre: 'Raphael', categoria: 'videojuegos', imagen: 'https://upload.wikimedia.org/wikipedia/en/8/82/Raphael_TMNT.png' },

   // LITERATURA
    { nombre: 'William Shakespeare', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg' },
    { nombre: 'J.K. Rowling', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg' },
    { nombre: 'Gabriel García Márquez', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gabriel_Garcia_Marquez.jpg' },
    { nombre: 'George Orwell', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/George_Orwell_press_photo.jpg' },
    { nombre: 'Agatha Christie', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Agatha_Christie.png' },
    { nombre: 'Ernest Hemingway', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/32/ErnestHemingway.jpg' },
    { nombre: 'F. Scott Fitzgerald', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/87/F_Scott_Fitzgerald_1921.jpg' },
    { nombre: 'Leo Tolstoy', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Lev_Tolstoy_1897.jpg' },
    { nombre: 'Jane Austen', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/CassandraAusten-JaneAusten(c.1810)_hires.jpg' },
    { nombre: 'Homer', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Homer_British_Museum.jpg' },
    { nombre: 'J.R.R. Tolkien', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/J._R._R._Tolkien_1925.jpg' },
    { nombre: 'Franz Kafka', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Franz_Kafka_1917.jpg' },
    { nombre: 'Virginia Woolf', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Virginia_Woolf_1927.jpg' },
    { nombre: 'H.P. Lovecraft', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/H._P._Lovecraft_portrait.jpg' },
    { nombre: 'Octavio Paz', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Octavio_Paz.jpg' },
    { nombre: 'Pablo Neruda', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Pablo_Neruda.JPG' },
    { nombre: 'Isabel Allende', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Isabel_Allende_2010.jpg' },
    { nombre: 'Miguel de Cervantes', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Cervantes.jpg' },
    { nombre: 'Fyodor Dostoevsky', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Fyodor_Dostoyevsky_1879.jpg' },
    { nombre: 'Mark Twain', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg' },
    { nombre: 'Charles Dickens', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Dickens_Gurney_head.jpg' },
    { nombre: 'Haruki Murakami', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Haruki_Murakami_2010.jpg' },
    { nombre: 'Gabriel García Márquez', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gabriel_Garcia_Marquez.jpg' },
    { nombre: 'Albert Camus', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Albert_Camus_1957.jpg' },
    { nombre: 'Simone de Beauvoir', categoria: 'literatura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Simone_de_Beauvoir_1965.jpg' },

    // INFLUENCERS
    { nombre: 'Coscu', categoria: 'influencer', imagen: 'https://www.instagram.com/p/DCuuEhzSoZq/?hl=es-la' },
    { nombre: 'Momo', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Momo_Ger%C3%B3nimo_2022.jpg' },
    { nombre: 'Markito Navaja', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Markito_Navaja_2023.jpg' },
    { nombre: 'El Demente', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/El_Demente_2021.jpg' },
    { nombre: 'Ori de Mierda', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Ori_de_Mierda_2022.jpg' },
    { nombre: 'Marti Benza', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Marti_Benza_2021.jpg' },
    { nombre: 'C0ker', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Coker_2022.jpg' },
    { nombre: 'Frankkaster', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Frankkaster_2021.jpg' },
    { nombre: 'Goncho', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Goncho_2022.jpg' },
    { nombre: 'Davo Xeneize', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Davo_Xeneize_2022.jpg' },
    { nombre: 'Agusneta', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Agusneta_2023.jpg' },
    { nombre: 'La Cobra', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/90/La_Cobra_2021.jpg' },
    { nombre: 'Spreen', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Spreen_2022.jpg' },
    { nombre: 'Vector', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Vector_2022.jpg' },
    { nombre: 'Luquita Rodriguez', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Luquita_Rodriguez_2021.jpg' },
    { nombre: 'Roberto Galati', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Roberto_Galati_2022.jpg' },
    { nombre: 'Duende Pablo', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Duende_Pablo_2021.jpg' },
    { nombre: 'Sasha Ferro', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Sasha_Ferro_2022.jpg' },
    { nombre: 'Bri Marcos', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Bri_Marcos_2021.jpg' },
    { nombre: 'Jaz Peralta', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Jazmin_Peralta_2022.jpg' },
    { nombre: 'Cele Pamio', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Cele_Pamio_2021.jpg' },
    { nombre: 'Belenegri', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Belenegri_2022.jpg' },
    { nombre: 'Bananirou', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Bananirou_2021.jpg' },
    { nombre: 'Bananero', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Bananero_2022.jpg' },
    { nombre: 'Robleis', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Robleis_2022.jpg' },
    { nombre: 'Mernuel', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Mernuel_2022.jpg' },
    { nombre: 'Bauletti', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Bauletti_2022.jpg' },
    { nombre: 'Moski', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Moski_2022.jpg' },
    { nombre: 'Sol Aguilera', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Sol_Aguilera_2021.jpg' },
    { nombre: 'Joaco Lopez', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Joaco_Lopez_2022.jpg' },
    { nombre: 'Carrera', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Carrera_2022.jpg' },
    { nombre: 'Pimpeano', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Pimpeano_2021.jpg' },
    { nombre: 'Mortedor', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Mortedor_2022.jpg' },
    { nombre: 'Fran Gomez', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Fran_Gomez_2022.jpg' },
    { nombre: 'Morena Beltrán', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Morena_Beltr%C3%A1n_2021.jpg' },
    { nombre: 'Matías Ponce', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Mat%C3%ADas_Ponce_2022.jpg' },
    { nombre: 'Marito Baracus', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Marito_Baracus_2022.jpg' },
    { nombre: 'Paulina Cocina', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Paulina_Cocina_2022.jpg' },
    { nombre: 'Santi Maratea', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Santi_Maratea_2021.jpg' },
    { nombre: 'PedritoVm', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/PedritoVm_2022.jpg' },
    { nombre: 'Julián Serrano', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Juli%C3%A1n_Serrano_2018.jpg' },
    { nombre: 'Mica Suárez', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Mica_Su%C3%A1rez_2018.jpg' },
    { nombre: 'DrossRotzank', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/DrossRotzank_2019.jpg' },
    { nombre: 'Lyna', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Lyna_2021.jpg' },
    { nombre: 'La Faraona', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/La_Faraona_2022.jpg' },
    { nombre: 'Chapu Martínez', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Chapu_Mart%C3%ADnez_2018.jpg' },
    { nombre: 'Lio Ferro', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Lio_Ferro_2021.jpg' },
    { nombre: 'Kevsho', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Kevsho_2018.jpg' },
    { nombre: 'Flor Vigna', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Flor_Vigna_2018.jpg' },
    { nombre: 'Martín Cirio (La Faraona)', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/La_Faraona_2022.jpg' },
    { nombre: 'Tomás Holder', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Tom%C3%A1s_Holder_2022.jpg' },
    { nombre: 'Nico Occhiato', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Nico_Occhiato_2019.jpg' },
    { nombre: 'Flor Jazmín Peña', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Flor_Jazm%C3%ADn_Pe%C3%B1a_2020.jpg' },
    { nombre: 'Lizy Tagliani', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Lizy_Tagliani_2019.jpg' },
    { nombre: 'Grego Rossello', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Grego_Rossello_2018.jpg' },
    { nombre: 'Santi Talledo', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Santi_Talledo_2019.jpg' },
    { nombre: 'Soy Rada', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Soy_Rada_2019.jpg' },
    { nombre: 'Ibai', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Ibai_Llanos_2021.jpg' },
    { nombre: 'El Rubius', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/81/El_Rubius_2018.jpg' },
    { nombre: 'Vegetta777', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Vegetta777_2018.jpg' },
    { nombre: 'Willyrex', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Willyrex_2018.jpg' },
    { nombre: 'AuronPlay', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/91/AuronPlay_2020.jpg' },
    { nombre: 'Staxx', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Staxx_2020.jpg' },
    { nombre: 'Alexby', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Alexby_2019.jpg' },
    { nombre: 'Mangel', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Mangel_2018.jpg' },
    { nombre: 'ElMariana', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/44/ElMariana_2020.jpg' },
    { nombre: 'JuanGuarnizo', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Juan_Guarnizo_2020.jpg' },
    { nombre: 'Staryukki', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Staryukki_2021.jpg' },
    { nombre: 'Polispol', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Polispol_2021.jpg' },
    { nombre: 'WestCol', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/WestCol_2020.jpg' },
    { nombre: 'Rivers', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Rivers_2021.jpg' },
    { nombre: 'Mictia', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Mictia_2020.jpg' },
    { nombre: 'ElXocas', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/30/El_Xocas_2021.jpg' },
    { nombre: 'Oscurlord', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Oscurlord_2021.jpg' },
    { nombre: 'Zazza', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Zazza_El_Italiano_2020.jpg' },
    { nombre: 'Luisito Comunica', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Luisito_Comunica_2019.jpg' },
    { nombre: 'Zeko', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Zeko_2021.jpg' },
    { nombre: 'ElDed', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/80/El_Ded_2020.jpg' },
    { nombre: 'Fargan', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Fargan_2021.jpg' },
    { nombre: 'Jordi Wild', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Jordi_Wild_2020.jpg' },
    { nombre: 'Menos Trece', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Menos_Trece_2020.jpg' },
    { nombre: 'Leon Gamer', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Leon_Gamer_2020.jpg' },
    { nombre: 'MrBeast', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/44/MrBeast_2020.jpg' },
    { nombre: 'Milica', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Milica_2021.jpg' },
    { nombre: 'Iaara2', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Iaara2_2021.jpg' },
    { nombre: 'JugandoConNatalia', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Jugando_Con_Natalia_2020.jpg' },
    { nombre: 'HablandoHuevadas', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Hablando_Huevadas_2020.jpg' },
    { nombre: 'Lucila Mollesi', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Lucila_Mollesi_2021.jpg' },
    { nombre: 'Aida Domenech (Dulceida)', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Dulceida_2019.jpg' },
    { nombre: 'Kimberly Loaiza', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Kimberly_Loaiza_2020.jpg' },
    { nombre: 'Yuya', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Yuya_2017.jpg' },
    { nombre: 'Lele Pons', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Lele_Pons_2019.jpg' },
    { nombre: 'Fernanfloo', categoria: 'influencer', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Fernanfloo_2020.jpg' }
];

// Mapeo para determinar el número máximo de impostores por jugador
const impostoresMax = new Map([
  [4, 1], [5, 2], [6, 2], [7, 2], [8, 3], [9, 3],
  [10, 4], [11, 4], [12, 4], [13, 4], [14, 5],
  [15, 5], [16, 5], [17, 6], [18, 6], [19, 6], [20, 7]
]);

// Objeto que representa el estado completo del juego
const gameState = {
  cantidadJugadores: 3,
  cantidadImpostores: 1,
  categoriasSeleccionadas: [
    'futbol', 'cantantes', 'Random', 'historicos', 'television',
    'politica', 'deportes', 'cine', 'ciencia',
    'videojuegos', 'literatura', 'influencer'
  ],
  ultimaCantidadJugadores: 3,
  ultimaCantidadImpostores: 1,
  jugadores: [],
  turnoActual: 0,
  juegoIniciado: false,
  mostrandoTurno: false,
  juegoFinalizado: false,
  jugadorActual: null,
  mostrarRol: false,
};

// -- SELECCIÓN DE ELEMENTOS DEL DOM --

const configCard = document.querySelector('.game-card:nth-of-type(1)');
const turnCard = document.querySelector('.game-card:nth-of-type(2)');
const finalCard = document.querySelector('.game-card:nth-of-type(3)');
const playersInput = document.querySelector('input[type="number"]');
const categoryChipsContainer = document.querySelector('.category-chips');
const startButton = document.querySelector('.start-button');
const showRoleButton = document.querySelector('.game-card:nth-of-type(2) .action-button:nth-of-type(1)');
const nextPlayerButton = document.querySelector('.game-card:nth-of-type(2) .action-button:nth-of-type(2)');
const restartButton = document.querySelector('.game-card:nth-of-type(3) .action-button');
const multiplayerBtn = document.getElementById('multiplayer-btn'); 
// -- FUNCIONES DE LÓGICA DEL JUEGO --

// Alterna una categoría entre seleccionada y no seleccionada
function toggleCategoria(categoria) {
  categoria = normalize(categoria);
  if (gameState.categoriasSeleccionadas.includes(categoria)) {
    gameState.categoriasSeleccionadas = gameState.categoriasSeleccionadas.filter(c => c !== categoria);
  } else {
    gameState.categoriasSeleccionadas.push(categoria);
  }
  updateChipsUI();
}

// Actualiza el número de impostores cuando cambia la cantidad de jugadores
function onCantidadJugadoresChange() {
  const valor = parseInt(playersInput.value);
  gameState.cantidadJugadores = Math.max(3, Math.min(valor, 20));

  playersInput.value = gameState.cantidadJugadores;

  const maxImpostores = impostoresMax.get(gameState.cantidadJugadores) || 1;
  gameState.cantidadImpostores = Math.floor(Math.random() * maxImpostores) + 1;

  gameState.ultimaCantidadJugadores = gameState.cantidadJugadores;
  gameState.ultimaCantidadImpostores = gameState.cantidadImpostores;
}

// Genera la lista de jugadores con sus roles y personajes
function generarJugadores() {
  const roles = [];
  const todosImpostores = Math.random() < 0.01;
  const todosDistintos = !todosImpostores && Math.random() < 0.01;

  if (todosImpostores) {
    for (let i = 0; i < gameState.cantidadJugadores; i++) roles.push('impostor');
  } else {
    for (let i = 0; i < gameState.cantidadImpostores; i++) roles.push('impostor');
    for (let i = roles.length; i < gameState.cantidadJugadores; i++) roles.push('normal');
  }

  roles.sort(() => Math.random() - 0.5);

    const personajesFiltrados = personajes.filter(p =>
    gameState.categoriasSeleccionadas.includes(normalize(p.categoria))
    );

    if (personajesFiltrados.length === 0) {
    alert("No hay personajes disponibles para las categorías seleccionadas.");
    return;
    }

  gameState.jugadores = [];

  if (todosDistintos) {
    const personajesRandomizados = personajesFiltrados
      .sort(() => Math.random() - 0.5)
      .slice(0, gameState.cantidadJugadores);

    gameState.jugadores = roles.map((rol, idx) => {
      if (rol === 'impostor') return { rol };
      const personaje = personajesRandomizados[idx];
      return { rol, personaje };
    });
  } else if (todosImpostores) {
    gameState.jugadores = roles.map(rol => ({ rol }));
  } else {
    const personajeComun = personajesFiltrados[Math.floor(Math.random() * personajesFiltrados.length)];
    gameState.jugadores = roles.map(rol => {
    if (rol === 'impostor') return { rol };
    return { rol, personaje: personajeComun };
    });
  }

  gameState.turnoActual = 0;
  gameState.mostrandoTurno = true;
  gameState.juegoFinalizado = false;
  gameState.mostrarRol = false;
}

// Muestra la pantalla del siguiente jugador o finaliza el juego
function mostrarSiguienteTurno() {
  if (gameState.turnoActual >= gameState.jugadores.length) {
    gameState.juegoFinalizado = true;
    gameState.mostrandoTurno = false;
    render();
    return;
  }
  gameState.jugadorActual = gameState.jugadores[gameState.turnoActual];
  gameState.mostrandoTurno = true;
  gameState.mostrarRol = false;
  render();
}

// -- FUNCIONES DE INTERACCIÓN CON LA UI --

// Función principal para renderizar la pantalla correcta
// Función principal para renderizar la pantalla correcta
function render() {
    // 1. Manejo de la configuración inicial (antes de empezar el juego)
    if (!gameState.juegoIniciado && !gameState.juegoFinalizado) {
        configCard.style.display = 'block';
        turnCard.style.display = 'none';
        finalCard.style.display = 'none';
        
        // MOSTRAR: El botón de multiplayer SÍ es visible aquí.
        if (multiplayerBtn) multiplayerBtn.style.display = 'block';

    // 2. Manejo de la partida en curso
    } else if (gameState.juegoIniciado && !gameState.juegoFinalizado) {
        configCard.style.display = 'none';
        turnCard.style.display = 'block';
        finalCard.style.display = 'none';
        
        // OCULTAR: El botón de multiplayer se oculta al iniciar la partida.
        if (multiplayerBtn) multiplayerBtn.style.display = 'none';

        renderTurno();
        
    // 3. Manejo del juego finalizado
    } else if (gameState.juegoFinalizado) {
        configCard.style.display = 'none';
        turnCard.style.display = 'none';
        finalCard.style.display = 'block';
        
        // MOSTRAR: El botón de multiplayer puede volver a ser visible en la pantalla final
        // (o puedes mantenerlo oculto si quieres que solo se vea al reiniciar).
        if (multiplayerBtn) multiplayerBtn.style.display = 'block'; 
    }
}

// Renderiza la pantalla de "tu turno"
function renderTurno() {
  const jugadorCard = document.querySelector('.game-card:nth-of-type(2)');
  const pantallaSeparador = jugadorCard.querySelector('.pantalla-separador');
  const rolContainer = jugadorCard.querySelector('.rol-container');
  const verRolButton = document.querySelector('.game-card:nth-of-type(2) .action-button:nth-of-type(1)');
  const siguienteButton = document.querySelector('.game-card:nth-of-type(2) .action-button:nth-of-type(2)');

  if (!gameState.mostrarRol) {
    pantallaSeparador.style.display = 'flex';
    rolContainer.style.display = 'none';
    verRolButton.style.display = 'block';
    siguienteButton.style.display = 'none';
  } else {
    pantallaSeparador.style.display = 'none';
    rolContainer.style.display = 'flex';
    verRolButton.style.display = 'none';
    siguienteButton.style.display = 'block';

    const imgElement = rolContainer.querySelector('.personaje-imagen');
    const titleElement = rolContainer.querySelector('.rol-title');

    if (gameState.jugadorActual) {
      if (gameState.jugadorActual.personaje) {
        imgElement.src = gameState.jugadorActual.personaje.imagen;
        imgElement.alt = gameState.jugadorActual.personaje.nombre;
        titleElement.textContent = gameState.jugadorActual.personaje.nombre;
        titleElement.classList.add('inocente');
        titleElement.classList.remove('impostor');
      } else {
        imgElement.src = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Anonymous_emblem.png';
        imgElement.alt = 'IMPOSTOR';
        titleElement.textContent = 'IMPOSTOR';
        titleElement.classList.add('impostor');
        titleElement.classList.remove('inocente');
      }
    }
  }
}

// Actualiza los chips de categorías para reflejar la selección
function updateChipsUI() {
  const chips = document.querySelectorAll('.category-chips span');
  chips.forEach(chip => {
    const cat = normalize(chip.textContent.trim());
    if (gameState.categoriasSeleccionadas.includes(cat)) {
      chip.classList.add('secondary');
      chip.classList.remove('medium');
    } else {
      chip.classList.add('medium');
      chip.classList.remove('secondary');
    }
  });
}

// -- MANEJADORES DE EVENTOS --

function iniciarJuego() {
  onCantidadJugadoresChange();
  generarJugadores();
  gameState.juegoIniciado = true;
  gameState.mostrandoTurno = false;
  gameState.mostrarRol = false;
  mostrarSiguienteTurno();
}

function siguienteJugador() {
  gameState.turnoActual++;
  mostrarSiguienteTurno();
}

function reiniciarJuego() {
  gameState.juegoIniciado = false;
  gameState.juegoFinalizado = false;
  gameState.turnoActual = 0;
  gameState.jugadores = [];
  gameState.jugadorActual = null;
  gameState.cantidadJugadores = gameState.ultimaCantidadJugadores;
  gameState.cantidadImpostores = gameState.ultimaCantidadImpostores;
  gameState.mostrarRol = false;
  
  // La llamada a render() aquí hará que el botón de multiplayer
  // se muestre de nuevo (ver lógica en la función render).
  render();
}

function mostrarRol() {
  gameState.mostrarRol = true;
  renderTurno();
}

// Asignación de oyentes de eventos a los elementos del DOM
playersInput.addEventListener('change', onCantidadJugadoresChange);
startButton.addEventListener('click', iniciarJuego);

categoryChipsContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    toggleCategoria(event.target.textContent.trim());
  }
});

if (showRoleButton) {
  showRoleButton.addEventListener('click', mostrarRol);
}
if (nextPlayerButton) {
  nextPlayerButton.addEventListener('click', siguienteJugador);
}
if (restartButton) {
  restartButton.addEventListener('click', reiniciarJuego);
}



// -- INICIALIZACIÓN --

// Renderiza la pantalla inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  updateChipsUI();
  render();
});


