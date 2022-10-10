import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { Button } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { InputField } from "../components/InputField";
import { useCreatePostMutation, useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import {useIsAuth} from '../utils/useIsAuth'

const CreatePost: React.FC<{}> = ({}) => {
    const router = useRouter();
   useIsAuth();



  const [, createPost] = useCreatePostMutation();
  return (
    <Layout variant='small'>
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values) => {
          console.log(values);
         const {error} =  await createPost({ input: values });
          if(!error) {

              router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <InputField
              textarea
              name="text"
              placeholder="text..."
              label="Body"
            />

            <Button
              mt={4}
              type="submit"
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              {" "}
              create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
