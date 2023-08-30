return (
    <UpdateContainer>
      <h2>Update Profile</h2>
      <UpdateForm onSubmit={handleFormSubmit} noValidate validated={validated}>
        <FormInputGroup>
          <FormLabel htmlFor='weight'>Weight: </FormLabel>
          <FormInput type='text' id='weight' name='weight' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='activity level'>Activity Level: </FormLabel>
          <FormInput type='text' id='activity' name='activity level' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='diet'>Diet: </FormLabel>
          <FormInput type='text' id='diet' name='diet' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='goal'>Goals </FormLabel>
          <FormInput type='text' id='goal' name='goals' onChange={handleChange} />
        </FormInputGroup>
        <SubmitButton type='submit' value='Submit' />
        {showError ? (
          <h4 style={{ color: "red" }}>
            Error Updating Profile!
          </h4>
        ) : (
          <></>
        )}
        {showSuccess ? (
          <h4 style={{ color: "green" }}>
            Update Successful!
          </h4>
        ) : (
          <></>
        )}
      </UpdateForm>
    </UpdateContainer>
  );