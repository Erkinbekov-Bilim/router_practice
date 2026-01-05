import React from 'react';
import type { IEdwardSnowdenInfo } from '../../types';
import './RenderPage.css';

interface IRenderPageProps {
  info: IEdwardSnowdenInfo;
}

const RenderPage: React.FC<IRenderPageProps> = ({ info }) => {
  const renderItem = (
    item: string | { label: string; text: string | string[] },
    index: number
  ) => {
    if (typeof item === 'string') {
      return (
        <p key={index} className="info-description">
          {item}
        </p>
      );
    }

    return (
      <div>
        <p>{item.label}</p>
        {Array.isArray(item.text) ? (
          item.text.map((text) => <p key={text + index}>{text}</p>)
        ) : (
          <p>{item.text}</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className='info-title-block'>
        <p className="info-title">{info.title}</p>
      </div>

      {Array.isArray(info.content)
        ? info.content.map((info, index) => renderItem(info, index))
        : typeof info.content === 'string' && (
            <p className="info-description">{info.content}</p>
          )}
    </div>
  );
};

export default RenderPage;
