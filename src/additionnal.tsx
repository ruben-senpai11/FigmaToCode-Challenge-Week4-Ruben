import {
    Box,
    Card,
    Button,
    Page,
    Text,
    BlockStack,
    InlineStack,
    InlineGrid,
    TextField,
    Divider,
    Popover,
    OptionList
  } from "@shopify/polaris";
  import { useBreakpoints } from "@shopify/polaris";
  import { Select, RadioButton } from '@shopify/polaris';
  import { useState, useCallback } from 'react';
  
  export default function AppSettingsLayoutExample() {
    const { smUp } = useBreakpoints();
    const [selected, setSelected] = useState('today');
  
    const handleSelectChange = useCallback(
      (value: string) => setSelected(value),
      [],
    );
  
    const options = [
      { label: 'Today', value: 'today' },
      { label: 'Yesterday', value: 'yesterday' },
      { label: 'Last 7 days', value: 'lastWeek' },
    ];
  
    const [value, setValue] = useState('disabled');
  
    const handleChange = useCallback(
      (_: boolean, newValue: string) => setValue(newValue),
      [],
    );
  
  
    const [popoverActive, setPopoverActive] = useState(true);
  
    const togglePopoverActive = useCallback(
      () => setPopoverActive((popoverActive) => !popoverActive),
      [],
    );
  
    const activator = (
      <Button onClick={togglePopoverActive} disclosure>
        More actions
      </Button>
    );
    const [multipleDelected, setMultipleDelected] = useState<string[]>([]);
  
    return (
      <Page
        divider
        primaryAction={{ content: "Save" }}
        secondaryActions={[
          {
            content: "Export Products",
            accessibilityLabel: "Secondary action label",
            onAction: () => alert("Products exported"),
          },
        ]}
      >
        <Box paddingBlock="200">
          <BlockStack gap={{ xs: "800", sm: "400" }}>
            <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
              <Box
                as="section"
                paddingInlineStart={{ xs: 400, sm: 0 }}
                paddingInlineEnd={{ xs: 400, sm: 0 }}
              >
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Commandes
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Set your FTP config here
                  </Text>
                </BlockStack>
              </Box>
              <Card roundedAbove="sm">
                <BlockStack gap="600">
                  <TextField label="* Host FTP" />
                  <TextField label="* Port FTP" />
                  <TextField label="* Login FTP" />
                  <TextField label="* Password FTP" />
                  <TextField type="number" label="* Heure de début de limitation" helpText="Nombre entre 0 et 23, 0 pour minuit. Le début et la fin doivent être égaux pour ne pas imposer de limitation." />
                  <TextField type="number" label="* Heure de début de limitation" helpText="Nombre entre 0 et 23, 0 pour minuit. Le début et la fin doivent être égaux pour ne pas imposer de limitation." />
                  <TextField label="* Clé FTP" />
                </BlockStack>
                <Box paddingBlock="400">
                  <InlineStack align="end">
                    <Button variant="primary" tone="success">Save</Button>
                  </InlineStack>
                </Box>
              </Card>
            </InlineGrid>
            {smUp ? <Divider /> : null}
            <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
              <Box
                as="section"
                paddingInlineStart={{ xs: 400, sm: 0 }}
                paddingInlineEnd={{ xs: 400, sm: 0 }}
              >
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Commandes
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Set your FTP config here
                  </Text>
                </BlockStack>
              </Box>
              <Card roundedAbove="sm">
                <BlockStack gap="600">
                  <Box paddingBlock="0">
                    <Text variant="bodyLg" as="p">Mode Partiel</Text>
                    <RadioButton
                      label="Accounts are disabled"
                      helpText="Customers will only be able to check out as guests."
                      checked={value === 'disabled'}
                      id="disabled"
                      name="accounts"
                      onChange={handleChange}
                    />
                    <RadioButton
                      label="Accounts are optional"
                      helpText="Customers will be able to check out with a customer account or as a guest."
                      id="optional"
                      name="accounts"
                      checked={value === 'optional'}
                      onChange={handleChange}
                    />
                  </Box>
                  <Select
                    label="* Etat commande payé"
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                  />
                  <Box paddingBlock="100" width="100%">
                    <Text variant="bodyLg" as="p">* Etat commande à expédier. Des choix multiples sont possibles.</Text>
                    <Popover
                      active={popoverActive}
                      activator={activator}
                      autofocusTarget="first-node"
                      onClose={togglePopoverActive}
                    >
                      <OptionList
                        title=""
                        onChange={setMultipleDelected}
                        options={[
                          { value: 'byward_market', label: 'Byward Market' },
                          { value: 'centretown', label: 'Centretown' },
                          { value: 'hintonburg', label: 'Hintonburg' },
                          { value: 'westboro', label: 'Westboro' },
                          { value: 'downtown', label: 'Downtown' },
                        ]}
                        selected={multipleDelected}
                        allowMultiple
                      />
                    </Popover>
                  </Box>
                  <Select
                    label="* Etat commande expédiée"
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                  />
                </BlockStack>
                <Box paddingBlock="400">
                  <InlineStack align="end">
                    <Button variant="primary" tone="success">Save</Button>
                  </InlineStack>
                </Box>
              </Card>
            </InlineGrid>
          </BlockStack>
        </Box>
      </Page>
    )
  }
  
  function Code({ children }: { children: React.ReactNode }) {
    return (
      <Box
        as="span"
        padding="025"
        paddingInlineStart="100"
        paddingInlineEnd="100"
        background="bg-surface-active"
        borderWidth="025"
        borderColor="border"
        borderRadius="100"
      >
        <code>{children}</code>
      </Box>
    );
  }
  