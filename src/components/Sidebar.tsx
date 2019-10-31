import React, { useState } from 'react';
import classNames from 'classnames';

const Sidebar = () => {
  const installing_typeScript = 'Installing_TypeScript';
  const building_your_first_typeScript_file =
    'Building_your_first_TypeScript_file';
  const compiling_your_code = 'Compiling_your_code';
  const type_annotations = 'Type_Annotations';
  const interfaces = 'Interfaces';
  const classes = 'Classes';
  const running_your_typeScript_web_app = 'Running_your_TypeScript_web_app';
  const [active_class, set_active_class] = useState(installing_typeScript);
  return (
    <section className='sidebar'>
      <nav id='navbar' className='p-2'>
        <header className='lead navbar-header'>TypeScript Documentation</header>
        <ul className='list-unstyled pl-2'>
          <li
            onClick={() => set_active_class(installing_typeScript)}
            className={classNames('options', {
              'option-active': active_class === installing_typeScript
            })}>
            <a className='nav-link' href={`#${installing_typeScript}`}>
              Installing TypeScript
            </a>
          </li>
          <li
            onClick={() =>
              set_active_class(building_your_first_typeScript_file)
            }
            className={classNames('options', {
              'option-active':
                active_class === building_your_first_typeScript_file
            })}>
            <a
              className='nav-link'
              href={`#${building_your_first_typeScript_file}`}>
              Building your first TypeScript file
            </a>
          </li>
          <li
            onClick={() => set_active_class(compiling_your_code)}
            className={classNames('options', {
              'option-active': active_class === compiling_your_code
            })}>
            <a className='nav-link' href={`#${compiling_your_code}`}>
              Compiling your code
            </a>
          </li>
          <li
            onClick={() => set_active_class(type_annotations)}
            className={classNames('options', {
              'option-active': active_class === type_annotations
            })}>
            <a className='nav-link' href={`#${type_annotations}`}>
              Type annotations
            </a>
          </li>
          <li
            onClick={() => set_active_class(interfaces)}
            className={classNames('options', {
              'option-active': active_class === interfaces
            })}>
            <a className='nav-link' href={`#${interfaces}`}>
              Interfaces
            </a>
          </li>
          <li
            onClick={() => set_active_class(classes)}
            className={classNames('options', {
              'option-active': active_class === classes
            })}>
            <a className='nav-link' href={`#${classes}`}>
              Classes
            </a>
          </li>
          <li
            onClick={() => set_active_class(running_your_typeScript_web_app)}
            className={classNames('options', {
              'option-active': active_class === running_your_typeScript_web_app
            })}>
            <a
              className='nav-link'
              href={`#${running_your_typeScript_web_app}`}>
              Running your TypeScript web app
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
