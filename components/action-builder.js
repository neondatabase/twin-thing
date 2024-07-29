import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import * as RadioGroup from '@radix-ui/react-radio-group';

import NeonLogo from './neon-logo';
import TextInput from './text-input';
import RadioGroupInput from './radio-group-input';
import DropdownInput from './dropdown-input';
import ShikiHighlight from './shiki-highlight';

import { config, DEFAULT, QUERY, WEBHOOK, SSL } from '../const/code-config';
import { appState, hashId } from '../state';
import { scrollToElement } from '../utils/scroll-to-element';

const ActionBuilder = () => {
  const router = useRouter();
  const [state, setState] = useAtom(appState);

  const updateSearchParams = async () => {
    const searchParams = new URLSearchParams({
      workflowName: state.workflowName,
      schedule: state.schedule,
      pgVersion: state.pgVersion,
      job: state.job,
      sslName: state.sslName,
    }).toString();

    const href = `/#${state.hash}?${searchParams}`;
    await router.push(href, undefined, { shallow: true });
  };

  useEffect(() => {
    updateSearchParams();
  }, [state]);

  const handleWorkflowNameChange = (event) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      workflowName: value,
      hash: hashId,
    }));
  };

  const handleScheduleChange = (event) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      schedule: value,
      hash: hashId,
    }));
  };

  const handlePgVersionChange = (event) => {
    const {
      target: { innerText },
    } = event;

    setState((prevState) => ({
      ...prevState,
      pgVersion: innerText,
      hash: hashId,
    }));
  };

  const handleSSLName = (event) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      sslName: value,
      hash: hashId,
    }));
  };

  const onJobTypeChange = (value) => {
    setState((prevState) => ({
      ...prevState,
      job: value,
      hash: hashId,
    }));

    scrollToElement();
  };

  return (
    <div className='flex flex-col lg:flex-row bg-brand-background border-t border-t-brand-border'>
      <div>
        <div className='lg:sticky top-0 lg:w-72 bg-brand-background border-b border-b-brand-border lg:border-b-0'>
          <div className='lg:h-screen lg:overflow-scroll'>
            <div className='flex flex-col gap-8 py-8'>
              <div className='flex items-center gap-2 px-4 lg:px-6'>
                <NeonLogo showText={false} />
                <h2 className='m-0 mb-0.5 text-brand-gray-200 text-base font-normal'>/ Twin Thing</h2>
              </div>
              <div className='flex flex-col gap-8 px-4 lg:px-8'>
                <div className='flex flex-col gap-4'>
                  <strong className='uppercase text-brand-gray-200 text-lg'>workflow</strong>
                  <TextInput label='Name' defaultValue={state.workflowName} onChange={handleWorkflowNameChange} />
                  <TextInput label='Schedule' defaultValue={state.schedule} onChange={handleScheduleChange} />
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='flex flex-col gap-4'>
                    <strong className='uppercase text-brand-gray-200 text-lg'>dump and restore</strong>
                    <DropdownInput
                      label='PostgreSQL Version'
                      value={state.pgVersion}
                      options={['14', '15', '16']}
                      onSelect={handlePgVersionChange}
                    />
                  </div>
                  <RadioGroup.Root value={state.job} onValueChange={onJobTypeChange} className='flex flex-col gap-4'>
                    <RadioGroupInput label='Default' value={DEFAULT} />
                    <RadioGroupInput label='Database Query' value={QUERY} />
                    <RadioGroupInput label='Slack Webhook' value={WEBHOOK} />
                    <RadioGroupInput label='SSL Certificate' value={SSL} />
                    {state.job === SSL ? (
                      <div className='ml-8'>
                        <TextInput label='File name' defaultValue={state.sslName} onChange={handleSSLName} />
                      </div>
                    ) : null}
                  </RadioGroup.Root>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 border-t-0 lg:border-t-0 lg:border-l lg:border-l-brand-border px-4 py-8 lg:px-6 overflow-hidden max-w-7xl'>
        <div className='ml-0 sm:ml-16'>
          <h2>{config[state.job].title}</h2>
          <p dangerouslySetInnerHTML={{ __html: config[state.job].description }} />
        </div>
        <div className='flex flex-col gap-16'>
          {Array.isArray(config[state.job].code)
            ? config[state.job].code.map((item, index) => {
                const { file, language, text } = item;
                return (
                  <div key={index} className='flex gap-2 sm:gap-6'>
                    <div className='text-brand-gray-200'>
                      <span className='flex items-center font-medium justify-center text-xs w-8 h-8 mt-2 rounded-full border-2 border-brand-border bg-brand-background sm:w-10 sm:h-10 sm:text-base'>
                        {index + 1}
                      </span>
                      <span className='flex mx-auto w-0.5 h-[200%] bg-brand-border' />
                    </div>
                    <ShikiHighlight
                      file={file}
                      language={language}
                      text={
                        typeof text === 'function'
                          ? text({
                              workflowName: state.workflowName,
                              schedule: state.schedule,
                              sslName: state.sslName,
                              pgVersion: state.pgVersion,
                            })
                          : text
                      }
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default ActionBuilder;
