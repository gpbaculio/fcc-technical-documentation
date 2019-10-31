import React, { useState } from 'react';
import classNames from 'classnames';

const Sidebar = () => {
  const installing_typeScript = 'installing_typeScript';
  const building_your_first_typeScript_file =
    'building_your_first_typeScript_file';
  const compiling_your_code = 'compiling_your_code';
  const type_annotations = 'type_annotations';
  const interfaces = 'interfaces';
  const classes = 'classes';
  const running_your_typeScript_web_app = 'running_your_typeScript_web_app';
  const [active_class, set_active_class] = useState(installing_typeScript);
  return (
    <section className='sidebar'>
      <nav className='p-2'>
        <header>TypeScript Documentation</header>
        <ul className='list-unstyled pl-2'>
          <li
            onClick={() => set_active_class(installing_typeScript)}
            className={classNames('options', {
              'option-active': active_class === installing_typeScript
            })}>
            <a href={`#${installing_typeScript}`}>Installing TypeScript</a>
          </li>
          <li
            onClick={() =>
              set_active_class(building_your_first_typeScript_file)
            }
            className={classNames('options', {
              'option-active':
                active_class === building_your_first_typeScript_file
            })}>
            <a href={`#${building_your_first_typeScript_file}`}>
              Building your first TypeScript file
            </a>
          </li>
          <li
            onClick={() => set_active_class(compiling_your_code)}
            className={classNames('options', {
              'option-active': active_class === compiling_your_code
            })}>
            <a href={`#${compiling_your_code}`}>Compiling your code</a>
          </li>
          <li
            onClick={() => set_active_class(type_annotations)}
            className={classNames('options', {
              'option-active': active_class === type_annotations
            })}>
            <a href={`#${type_annotations}`}>Type annotations</a>
          </li>
          <li
            onClick={() => set_active_class(interfaces)}
            className={classNames('options', {
              'option-active': active_class === interfaces
            })}>
            <a href={`#${interfaces}`}>Interfaces</a>
          </li>
          <li
            onClick={() => set_active_class(classes)}
            className={classNames('options', {
              'option-active': active_class === classes
            })}>
            <a href={`#${classes}`}>Classes</a>
          </li>
          <li
            onClick={() => set_active_class(running_your_typeScript_web_app)}
            className={classNames('options', {
              'option-active': active_class === running_your_typeScript_web_app
            })}>
            <a href={`#${running_your_typeScript_web_app}`}>
              Running your TypeScript web app
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
