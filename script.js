var quotes = ["\"Frankly, my dear, I don't give a damn.\" -- Rhett Butler(Clark Gable), Gone With the Wind(1939)", "\"I'm gonna make him an offer he can't refuse.\" -- Vito Corleone(Marlon Brando), Godfather(1972)", "\"Toto, I've got a feeling we're not in Kansas anymore.\" -- Dorothy Gale(Judy Garland), The Wizard of Oz(1939)", "\"Here's looking at you, kid.\" -- Rick Blaine(Humphry Bogart), Casablanca(1942)", "\"Go ahead, make my day.\" -- Harry Callahan(Clint Eastwood), Sudden Impact(1983)", "\"May the Force be with you.\" -- Han Solo(Harrison Ford), Star Wars(1977)", "\"You talkin' to me?\" -- Travis Bickle(Robert De Niro), Taxi Driver(1976)", "\"I love the smell of napalm in the morning.\" -- Lt. Col. Bill Kilgore(Robert Duvall), Apocalypse Now(1979)", "\"E.T. phone home.\" -- E.T.(Pat Walsh), E.T. the Extra Terrestrial(1982)", "\"Rosebud.\" -- Charles Foster Kane(Orson Welles), Citizen Kane(1941)", "\"You're gonna need a bigger boat.\" -- Martin Brody(Roy Scheider), Jaws(1975)", "\"Get to the choppa!\" -- Maj. Alan(Dutch)Schaefer(Arnold Schwarzenegger), Predator(1987)"];

var images = ["https://i.ytimg.com/vi/PAqxWa9Rbe0/maxresdefault.jpg", "https://i.ytimg.com/vi/zlOPyshRauI/maxresdefault.jpg", "https://i.ytimg.com/vi/T23jqjlbylg/hqdefault.jpg", "http://emanuellevy.com/wp-content/uploads/2013/11/casablanca_1_bogart_bergman.jpg", "https://i.ytimg.com/vi/D_Fmm4mc234/maxresdefault.jpg", "https://i.ytimg.com/vi/ySMzK4xzWhU/maxresdefault.jpg", "https://i.ytimg.com/vi/JkxoczOXRi4/maxresdefault.jpg", "https://i.ytimg.com/vi/1Ez5_bNvO_s/maxresdefault.jpg", "http://www.screeninsults.com/images/et-device.jpg", "https://qph.ec.quoracdn.net/main-qimg-50c4a01d6630dade9e40958940600163?convert_to_webp=true", "https://wayneley.files.wordpress.com/2012/06/jaws2.jpg", "http://i.dmarge.com/2016/03/Dutch_fires_M16.jpg"];

function newQuote() {
    var randNumber = Math.floor(Math.random() * (quotes.length));
    
    document.getElementById('quoteDisplay').innerHTML = quotes[randNumber];

    document.getElementById('quoteImage').src = images[randNumber];
  
}