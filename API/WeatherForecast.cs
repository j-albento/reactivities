namespace API;

public class WeatherForecast
{
    public DateOnly Date { get; set; }

    public int TemperatureC { get; set; }

    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

    // the ? means it is a nullable property, it does not have to contain a string
    // must turn off nullable peroperty in API.csproj file for all folders (Domain.csproj, Application.csproj, Persistence.csproj)
    public string Summary { get; set; }
}
