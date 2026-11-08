    /** {{description}} */
    {{name}}: async function ({{args}}) {
        const response = await axios.{{method}}(`${BASE_URL}{{route}}`{{body}}, requestOptions);
        return response.data[0];
    },
