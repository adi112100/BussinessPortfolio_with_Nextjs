/*
JSON FORMAT

{
    id : uniqid,
    title: 'xyz',
    body:  <> Body </>,
    year : '20xx'

}

*/

export const blogdataJSON = [

    {
        id: 1,
        title: 'Blog 1',
        body: <div style={{ marginTop: '50px' }}>
            <h4>Today I will show you how to use unsplash Api to generate random images.</h4>
            <p>
                Mobile SDKs<br/>
                Everything you need to search, fetch, and insert beautiful Unsplash images directly into your application with a fully native UI.
                <br/>
                Available on Android and iOS.
            </p>
            <p>
                Dynamically resizable images<br/>
                Every image URL returned by the API can easily be manipulated to dynamically adjust the dimensions, crop, and quality of the image in realtime.
            </p>
            <img src='https://source.unsplash.com/random' />
        </div>,
        year: 'Mar 2020'
    },
    {
        id: 2,
        title: 'Blog 2',
        body: <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum assumenda libero! Ducimus provident ipsa, nulla quisquam officia 
            praesentium alias ratione autem repudiandae est voluptate, quibusdam quae eveniet repellat asperiores.
            </>,
        year: 'Mar 2020'
    }
]