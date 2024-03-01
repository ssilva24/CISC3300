
$(document).ready(function()
{
    if (localStorage.getItem("lastCatFact")) {
        const lastCatFact = JSON.parse(localStorage.getItem("lastCatFact"));
            $("#randomCatFact").html(`
                <div>${lastCatFact.fact}</div>
            `);
    }

    $("#catFactButton").click(function () {
        $.get(`https://catfact.ninja/fact`, function (data, status) {
            const fact = data.fact;
            if (data.fact) {
                localStorage.setItem("lastCatFact", JSON.stringify({
                    fact:fact,
            }));
            $("#randomCatFact").html(`
                <div>${fact}</div>
            `);

        }
    });
    });
});

