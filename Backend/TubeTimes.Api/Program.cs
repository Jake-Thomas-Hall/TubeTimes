using TubeTimes.Api.API;
using TubeTimes.Api.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("_allowOriginsDev", policy =>
    {
        policy.AllowAnyOrigin();
    });
});
builder.Services.AddMemoryCache();
builder.Services.AddHttpClient<IRequestManager, RequestManager>();
builder.Services.AddScoped<ITfLAPI, TfLAPI>();

var app = builder.Build();

app.UseHttpsRedirection();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("_allowOriginsDev");
}

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

app.UseAuthorization();

app.MapControllers();

app.Run();
