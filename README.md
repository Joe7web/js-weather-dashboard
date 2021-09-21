# js-weather-dashboard

Acceptance Criteria
GIVEN a weather dashboard with form inputs


WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history

   -- when I type a city name in to a search area - the city I type will appear from the api connection.
    -- a display will show current and future weather conditions
      -- The city will be added to local storge for a search history



WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

  -- the display will show an icon for weather conditions,
  -- the display will show the temp
   -- the display will show the humidity
    -- the display will show the wind speed
     -- the display will show the UV index
  

WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

 -- there is a color code that is associated with uv index that will display with the uv index


WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

  --will dispaly 5 seperate colums showing icon for weather conditions, the temp, wind speed, and the humidity



WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
 -- If I click on search history  then the display will show the current and future conditions again