exports.handler = async (event, context) => {
  try {
    // Extract data from the request body
    const { Email, FullName, Company } = JSON.parse(event.body);

    const myHeaders = {
      Cookie:
        "_abck=E3595DD7A2EE518D36783387A7EA9FCC~-1~YAAQoV5swfCKqKGOAQAAGZeJtwt04Fst2b3U9mPYptLxtlogCi9JwCK+QLZen9PRmegE9YmfaR87HTU0mYlFMptkFEOS5QwlXDFmjlVbIkLlRNnScI0HSVk4Hf26LOEWKRqNGjCGzS0JRMUZeYHmY2tIJHPCQNxoxAnlVk01GCmS+TxHuGV1THPAjWoiWNuNpkF/N/7NQhXGkxn/BWHGKEymmc1dATGuqaV4k7BmopHU94YMWIHbJMc7h7Itqzo7E7bbD1P827pTaXti7n3h36IjSxiIASOOzVv6npRvWHaa4G4QI8bEuWKpSJedwRgBQYA1cmSQbXRYWdeO2TE8DCEp9aaXqIAaPzHBMULr/DSZAa24nKTkMEvbTb9rBPnJ7GHLBFQG14G8WNTW~-1~-1~-1; bm_sz=63159A593A8A433C52BB6CDA7AE41A19~YAAQoV5swfKKqKGOAQAAGZeJtxcKnuVreutJn0Wf6v/YvONkn9qDLi8UJbY9ElQmDnWe2BCi5E1w2Cx0M5adtnkIvd6NxSnbZyPgnpcTXv+udnXlW3tf+bMGWs7f5HGW6NB8Ldly9E2ehrTELy/+tXct1e50xmiwYYdZSjvJxpt85Mitt6vfQ4Hjmqkw4jYBIZR7wG8FFIxe7SIg+5Wsu4/cUxEgQzx7yubZSfvhpVk7eBahzNV5j3qUprFiW1h4rZgNR2l0BH+chSG7B9lUz2IktwvwIvNWqU+T6q8HfGX8dtWsqK0YyxIXMNVHfYTKtaMeFq0fJ2eKLrj6RTu+i405qrnEOQAD8eHstc9s+cbtg4E=~4474169~3224120; ak_bmsc=5BCC095C169644314BECB96314017C45~000000000000000000000000000000~YAAQoV5swfGKqKGOAQAAGZeJtxfBQTM9pMmWyHcST46T9L9hLhy6OC6wa/NgqqItGC/YkdPVJaMgRVVQ/tjJdfLc/kCERFMgvBiuYce1pcGmIRjbwpJ0HDBCV6vi+q4co3pk93FPq8vBYNV6NBR5+YYLEF8uF6muEPZMLSbTSqyX0B2h3qopj7QElrlvpchK/Ju0m9LFYadhGWDo2PG7zuBaBSgsH7BmiU2QrENuHnD0moJlk8VIwP92afr+GYk3WRAX0U7jP+hYqLUD8hU+cUCJiATz/Drfit9ghTHrP87N8YO0vgnlo4ebSsuo/Zxm1To6ylgCsUnVh4R/2Z28um6FbeeGttwuCpsoTk5tUZUZiv5vYH8IvHbAJeXFdniGUw6BVHDf; _mcid=1.2445772e62648412c7c87daa582ddd04.b4a2fd5977f7fbfaba057244705b37615dd0b9f960c993eba930a73063ef9c5b",
    };

    const formdata = new FormData();
    formdata.append("u", "9631c582d42df8e7f8cefdd7d");
    formdata.append("id", "047bea4814");
    formdata.append("Email", Email);
    formdata.append("MERGE1", FullName);
    formdata.append("MERGE2", Company);

    const { default: fetch } = await import("node-fetch");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    const response = await fetch(
      "https://app.us18.list-manage.com/subscribe/post",
      requestOptions
    );
    const data = await response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Subscription successful", data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error", error }),
    };
  }
};
