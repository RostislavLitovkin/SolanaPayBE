const index = async (request, response) => {
    // We set up our handler to only respond to `GET` and `POST` requests.
    if (request.method === 'GET') return get(request, response);
    if (request.method === 'POST') return post(request, response);

    throw new Error(`Unexpected method ${request.method}`);
};


const get = async (request, response) => {
    const label = 'Galaxy Logic Game';
    const icon = 'https://rostislavlitovkin.pythonanywhere.com/logo';

    response.status(200).send({
        label,
        icon,
    });
};