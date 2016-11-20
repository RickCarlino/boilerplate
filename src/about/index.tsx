import * as React from "react";

interface AboutProps {
    params: {
        topic: string;
    };
}

export function About(props: AboutProps) {
    return <div>
        <h1>
            About "{props.params.topic}"
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            officia neque iusto eaque molestiae pariatur, facere facilis
            laudantium ex vero dolorum commodi ratione amet reiciendis suscipit
            corporis labore, eos earum.
        </p>
    </div>;
}